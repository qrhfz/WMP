from pydantic import BaseModel


class Song(BaseModel):
    id: str
    title: str
    year: int
    audioUrl: str

    class Config:
        orm_mode = True


class Album(BaseModel):
    id: str
    title: str
    year: int

    class Config:
        orm_mode = True


class Artist(BaseModel):
    id: str
    name: str

    class Config:
        orm_mode = True
