from ninja import Schema


class pipoResponse(Schema):
    img: str
    label: str
    hex: list
