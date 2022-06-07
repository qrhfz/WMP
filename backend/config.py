from dotenv import load_dotenv
import os

load_dotenv()
MEDIA_DIR = os.getenv('MEDIA_DIR')
FRONTEND_DIR = os.getenv('FRONTEND_DIR')
BASE_URL = os.getenv('BASE_URL')
