from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
import os
import cv2
import numpy as np

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
    if at.Upload1.onChange:
        file_path = 'assets/new.jpeg'
        img = at.Upload1.io.files[0].file
        s = img.read()
        img_np = cv2.imdecode(np.fromstring(s, np.uint8), cv2.IMREAD_COLOR)
        cv2.imwrite(file_path, img_np)
        at.Image2.custom.src = create_media_response(file_path, mime_type='image/jpeg')
    if at.Button1.onClick:
        file_path = 'assets/new.jpeg'
        file_path2 = 'assets/new2.jpeg'
        from rembg import remove
        with open(file_path, 'rb') as i:
            with open(file_path2, 'wb') as o:
                input = i.read()
                output = remove(input)
                o.write(output)
        at.Image2.custom.src = create_media_response(file_path2, mime_type='image/jpeg')
        # at.Image8.custom.src = create_media_response(file_path2, mime_type='image/jpeg')
