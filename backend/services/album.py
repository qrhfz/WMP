from fastapi import Depends
from sqlalchemy.orm import Session
from models.database import get_db
from models.core import Album, Song, Artist
from schemas.extensions import AlbumExtended as AlbumSchema


class AlbumService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db

    def get_albums(self):
        return self.db.query(Album).all()

    def get_album_byid(self, id: str) -> AlbumSchema:
        album = self.db.query(Album).join(
            Song).filter(Album.id == id).first()

        return AlbumSchema(
            id=album.id, title=album.title,
            year=album.year, songs=album.songs,
            artists=album.artists[0]
        )

    def insert_album(self, album: AlbumSchema):
        db_album = Album(id="", title=album.title, year=album.year)
        self.db.add(db_album)
        self.db.commit()
