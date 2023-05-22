## Virtual Environment

For best practice you create virtual environment and install packages there.

**Install virtualenv:**
```bash
$ python -m pip install --user virtualenv
```

**To create a venv:**
```bash
$ virtualenv -p python3 [venv-name]
```

**To activate the venv:**
```bash
$ source [venv-name]/bin/activate
```

**After activating the virtual environment install packages using:**
```bash
$ pip3 install -r requirements.txt
```

**To start the FastAPI server:**
```bash
$ python main.py
```

**To see the API documentation visit: http://127.0.0.1:7777/docs**
