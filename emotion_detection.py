import requests


def emotion_detector(text_to_analyze):
    url = (
        "https://sn-watson-emotion.labs.skills.network/"
        "emotion/api/v1/text/emotion"
        "?version=2022-04-07"
    )

    response = requests.post(
        url,
        json={"text": text_to_analyze}
    )

    return response.json()
