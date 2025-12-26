from fastapi import FastAPI
import asyncio
import time

app = FastAPI()

# Synchronous endpoint
@app.get("/sync")
def sync_endpoint():
    print("Sync start")
    time.sleep(3)  # blocks the server
    print("Sync end")
    return {"message": "Finished sync task!"}

# Asynchronous endpoint
@app.get("/async")
async def async_endpoint():
    print("Async start")
    await asyncio.sleep(3)  # does NOT block other requests
    print("Async end")
    return {"message": "Finished async task!"}
