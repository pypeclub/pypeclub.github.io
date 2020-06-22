When developing on Windows make sure `start.sh` has the correct line endings (`LF`).

Setting for docker container:
```bash
docker build . -t pype-docs
docker run --rm -p 3000:3000 -v /c/Users/admin/pypeclub.github.io:/app pype-docs
```
