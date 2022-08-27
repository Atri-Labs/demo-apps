from ..yolov5.detect import run
import easyocr
from pathlib import Path

def get_us_driving_license_data(filepath: str):
    return run(
        data='cv_transformations/yolov5/US_DL.yaml',
        weights='cv_transformations/yolov5/best.pt',
        project=Path.cwd() / "data" / "test_outputs",
        name="",
        source=filepath,
        save_crop=True
        )

def run_driving_detection(filepath: str):
    _, dic = get_us_driving_license_data(filepath)
    reader = easyocr.Reader(['en', 'hi'], gpu=True)
    fin = {}
    for i in dic.items():
        fin[i] = ' '.join(reader.readtext(f'{i}.jpg',detail=False))
