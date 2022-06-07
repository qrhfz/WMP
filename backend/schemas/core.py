from typing import Any, List
from pydantic import BaseModel, Field, validator


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
    file: str
    artists: List[Artist] = []

    @validator('file')
    def format_filename(cls, v):
        prefix = "http://localhost:8000/media/"
        if v.startswith(prefix) == False:
            return "http://localhost:8000/media/"+v

        return v

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
