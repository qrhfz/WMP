from typing import List
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
    file: str = Field(alias='audioUrl')
    artists: List[Artist] = []

    @validator('file')
    def format_filename(cls, v):
        return "http://localhost:8000/media/"+v

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
