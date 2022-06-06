from typing import List
from pydantic import BaseModel


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


class Genre(BaseModel):
    id: str
    name: str

    class Config:
        orm_mode = True


class Song(BaseModel):
    id: str
    title: str
    year: int
    audioUrl: str
    artists: List[Artist] = []

    class Config:
        orm_mode = True
