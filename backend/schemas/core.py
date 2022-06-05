from pydantic import BaseModel


class Song(BaseModel):
    id: str
    title: str
    year: int


class Album(BaseModel):
    id: str
    title: str
    year: int


class Artist(BaseModel):
    id: str
    name: str
