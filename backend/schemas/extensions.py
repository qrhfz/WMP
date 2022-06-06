from typing import List, Union

from pydantic import BaseModel
from schemas.core import Album
from schemas.core import Artist
from schemas.core import Song


class AlbumExtended(BaseModel):
    id: str
    title: str
    year: int
    songs: List[Song] = []
    artists: List[Artist] = []

    class Config:
        orm_mode = True


class ArtistExtended(BaseModel):
    id: str
    name: str
    albums: List[Album] = []
    songs: List[Song] = []

    class Config:
        orm_mode = True


class SongExtended(BaseModel):
    id: str
    title: str
    year: int
    audioUrl: str
    album: Union[Album, None]
    artists: List[Artist] = []

    class Config:
        orm_mode = True


class GenreExtended(BaseModel):
    id: str
    name: str
    songs: List[Song] = []

    class Config:
        orm_mode = True
