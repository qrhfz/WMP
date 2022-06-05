from typing import List, Union
from pydantic import BaseModel

from backend.models.album import Album
from backend.models.song import Song

class Artist(BaseModel):
    id: str
    name: str
    albums: Union[List[Album],None] = None
    songs: Union[List[Song],None] = None