from typing import List, Union

from pydantic import BaseModel
from models.core import Album
from models.core import Artist
from models.core import Song


class AlbumExtended(BaseModel):
    id: str
    title: str
    year: int
    songs: List[Song] = []
    artists: List[Artist] = []


class ArtistExtended(BaseModel):
    id: str
    name: str
    albums: List[Album] = []
    songs: List[Song] = []


class SongExtended(BaseModel):
    id: str
    title: str
    year: int
    album: Union[Album, None]
    artists: List[Artist] = []
