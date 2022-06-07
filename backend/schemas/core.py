from typing import Any, List
from pydantic import BaseModel, Field, validator
from config import BASE_URL


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
        media_root = BASE_URL+"/media/"
        if v.startswith(media_root) == False:
            return media_root+v

        return v

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
