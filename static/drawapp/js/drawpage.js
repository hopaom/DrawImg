

const colorMap = [
    {color: "#384f83", id: 154, label: "sea"},
    {color: "#efefef", id: 105, label: "cloud", labelColor: "black"},
    {color: "#2c1e16", id: 110, label: "dirt"},
    {color: "#5d6e32", id: 96, label: "bush"},
    {color: "#b7d24e", id: 123, label: "grass", labelColor: "black"},
    {color: "#3c3b4b", id: 134, label: "mountain"},
    {color: "#987e6a", id: 148, label: "road"},
    {color: "#759edf", id: 156, label: "sky"},
    {color: "#352613", id: 168, label: "tree"},
    {color: "#e670b6", id: 118, label: "flower"},
    {color: "#c1c3c9", id: 119, label: "fog", labelColor: "black"},
    {color: "#776c2d", id: 126, label: "hill"},
    {color: "#bf602c", id: 128, label: "leaves"},
    {color: "#32604d", id: 147, label: "river"},
    {color: "#fafafa", id: 158, label: "snow", labelColor: "black"},
];
const hexToColorMap = colorMap.reduce((combined, color) => {
    combined[color.color] = color;
    return combined;
}, {});

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

class SketchBoard extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            image: null,
            strokeWidth: 18,
        };
    }

    componentDidMount() {
        this.sketchpad = new Atrament(this.canvasRef.current, {
            width: 512,
            height: 512,
        });
        this.clearSketch();
        // change the line thickness in pixels
        this.sketchpad.weight = this.state.strokeWidth;
        // tweak smoothing - higher values make the drawings look much better,
        // lower values make drawing feel a bit more responsive. Set to 0.85 by default.
        this.sketchpad.smoothing = .45;
        this.sketchpad.adaptiveStroke = false;
    }

    clearSketch = () => {
        this.sketchpad.clear();
        this.setSketchColor(colorMap.find(c => c.label == "sky").color);
        this.sketchpad.fill();
        // fill uses setTimeout of 100, so we need a bigger timeout...
        setTimeout(() => {
            this.setSketchColor(colorMap.find(c => c.label == "grass").color);
        }, 250);
    }

    setSketchColor = (color) => {
        this.sketchpad.color = color;
    }

    setSketchStrokeWidth = (width) => {
        this.sketchpad.weight = this.state.strokeWidth;
        this.setState({
            strokeWidth: width,
        });
    }

    generateSketch = async () => {
        this.setState({
            image: "https://icon-library.com/images/load-icon-gif/load-icon-gif-20.jpg",
        });
        $('.btn-render').hide()
        $('#go_next').hide()
        $('.loading_label').show()
        const context = this.sketchpad.context;
        const colorLayer = context.getImageData(0, 0, context.canvas.width, context.canvas.height).data;

        const colors = [];
        const sketch = [];
        let match_id = 255;
        for (let y = 0; y < context.canvas.height; y++) {
            sketch[y] = [];
            for (let x = 0; x < context.canvas.width; x++) {
                const pixelPos = (y * context.canvas.width + x) * 4;
                const pixelR = colorLayer[pixelPos];
                const pixelG = colorLayer[pixelPos + 1];
                const pixelB = colorLayer[pixelPos + 2];

                const color_match = hexToColorMap[rgbToHex(pixelR, pixelG, pixelB)];
                if (color_match) {
                    match_id = color_match.id;
                }
                sketch[y][x] = match_id;
            }
        }
        $('#loading_image').show()
        const response = await fetch('http://127.0.0.1:5000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sketch)
        })
            .then(response => response.json());
        this.setState({
            image: response['url'],
        });
        $('.btn-render').show()
        $('#go_next').show()
        $('.btn-render ').css({
            left: "30%"
        })
        $('.btn-render').text('다시 그리기')
        $('.loading_label').hide()
    }

    render() {
        return <React.Fragment>
            <div className="container">
                <div id="drawpad">
                    <div id="toolbar">
                    <div className="row">
                        <input type="button" value="Clear" onClick={() => this.clearSketch()}/>
                    </div>
                    <div className="row">
                        <div className="label">Stroke Thickness: {this.state.strokeWidth}px</div>
                        <div className="field">
                            <input type="range" min="1" max="80"
                                   value={this.state.strokeWidth}
                                   onChange={(e) => this.setSketchStrokeWidth(parseInt(e.target.value))}/>
                        </div>
                    </div>
                    <div className="row color-panel">
                        <div className="label">Color Palette:</div>
                        <div className="scroll">
                            {colorMap.map(c =>
                                <div key={c.color} className="color" style={{
                                    'background': c.color,
                                    'color': c.labelColor || 'white',
                                    'textShadow': c.labelColor ? '' : '0 0 1px black'
                                }} onClick={() => this.setSketchColor(c.color)}>{c.label}</div>
                            )}
                        </div>
                    </div>
                </div>
                <canvas id="sketchpad" ref={this.canvasRef}></canvas>
                </div>
                <div id="rendered">
                    {this.state.image ? null : <div className="no-render">
                        <div className="icon"><i className="far fa-images"></i></div>
                        <div className="label">Paint something then click the render button below!</div>

                    </div>}
                    {this.state.image ? <img className="generated-image" src={this.state.image}/>:null}
                    <div className="btn-render" onClick={this.generateSketch}>그리기</div>
                    <div id="go_next" onClick={this.next}>다음 단계로</div>
                    <div className="loading_label">그림을 그리는 중입니다!</div>
                </div>
            </div>
        </React.Fragment>;
    }

    next = () => {
            const src = jQuery('.generated-image').attr("src");
            const word = src.split('https://sparta-team4-project.s3.ap-northeast-2.amazonaws.com/gau/')
            const word2 = word[1].split('.')
            window.location.replace(`/test/gau/${word2[0]}`)
            }
}


ReactDOM.render(
    <SketchBoard/>,
    document.getElementById('root')
);

$('#loading_image').hide()
$('#go_next').hide()
$('.loading_label').hide()