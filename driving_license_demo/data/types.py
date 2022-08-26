from typing import Dict, List, TypedDict
from enum import Enum

class TestOutput(TypedDict):
    name: str
    license_no: str

class TestStatus(Enum):
    RIGHT = "right"
    WRONG = "wrong"
    EXCLAIM = "exclaim"

class Test(TypedDict):
    name: str
    time: str
    input_file: str
    output: TestOutput
    status: TestStatus

TestRegistry = Dict[str, Test]

# map of test name & comments
CommentRegistry = Dict[str, List[str]]