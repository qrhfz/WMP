from sqlalchemy.orm import Session
from models.core import Album
from schemas.extensions import AlbumExtended as AlbumSchema


class AlbumService:
    def __init__(self, db: Session):
        self.db = db

    def get_albums(self):
        return self.db.query(Album)

    def get_albums_byid(self, id: str):
        return self.db.query(Album).filter(Album.id == id).first()

    def insert_album(self, album: AlbumSchema):
        db_album = Album(id="", title=album.title, year=album.year)
        self.db.add(db_album)
        self.db.commit()
