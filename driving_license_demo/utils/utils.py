from data.types import CommentRegistry, TestRegistry
from datetime import datetime
import json

DATE_FORMAT = "%d/%m/%y %H:%M:%S"

epoch_base = datetime(1970, 1, 1)

def sort_by_date(reg: TestRegistry):
    def sort_fn(key):
        test = reg[key]
        time = datetime.strptime(test.get("time"), DATE_FORMAT)
        diff = (time - epoch_base).total_seconds()
        return diff

    return sort_fn

def get_comments(testname: str):
    with open("data/comments.json") as f:
        reg: CommentRegistry = json.load(f)
        if testname in reg:
            return reg[testname]
        return []