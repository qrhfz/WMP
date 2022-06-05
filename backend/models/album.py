from typing import List, Union
from pydantic import BaseModel
from backend.models.artist import Artist

from backend.models.song import Song

class Album(BaseModel):
    id: str
    title: str
    year: int
    songs: Union[List[Song], None] = None
    artists: Union[List[Artist], None] = None