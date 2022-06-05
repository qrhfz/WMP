from typing import List, Union
from pydantic import BaseModel

from backend.models.album import Album
from backend.models.artist import Artist

class Song(BaseModel):
    id: str
    title: str
    year: int
    album: Union[Album, None] = None
    artists: Union[List[Artist], None] = None
    