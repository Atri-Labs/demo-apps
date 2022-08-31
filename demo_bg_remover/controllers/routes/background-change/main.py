from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
import os
import cv2
import numpy as np
from PIL import Image


def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Upload3.onChange:
        file_path = 'assets/new3.jpeg'
        file_path2 = 'assets/new4.jpeg'

        img = at.Upload3.io.files[0].file
        s = img.read()
        img_np = cv2.imdecode(np.fromstring(s, np.uint8), cv2.IMREAD_COLOR)
        cv2.imwrite(file_path, img_np)
        at.Image3.custom.src = create_media_response(file_path, mime_type='image/jpeg')
        back = Image.open(file_path).resize((300,300))
        face = Image.open('assets/new2.jpeg').resize((300, 300))
        back.paste(face, (0,0), mask=face)
        print(type(back.tobytes()))
        back = cv2.cvtColor(np.asarray(back), cv2.COLOR_BGR2RGB )
        cv2.imwrite(file_path2,back)
        at.Image4.custom.src = create_media_response(file_path2, mime_type='image/jpeg')
    pass