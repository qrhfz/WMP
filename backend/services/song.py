from typing import List
from fastapi import Depends
from models.core import Song
from schemas.core import Song as SongSchema
from sqlalchemy.orm import Session

from models.database import get_db


class SongService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db

    def get_songs(self) -> List[SongSchema]:
        return self.db.query(Song).all()

    def get_song_byid(self, id: str) -> SongSchema:
        return self.db.query(Song).filter(Song.id == id).first()
