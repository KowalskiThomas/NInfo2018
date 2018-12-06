import forecastio
import requests

api_key = "78bcd84ce3910bc5ebc4bc6135801bd5"
def get_weather(lat, lng):
    forecast = forecastio.load_forecast(api_key, lat, lng)
    byHour = forecast.hourly()
    return byHour.data

def get_weather_list(lat, lng):
    byHour = get_weather(lat, lng)

    l = list()
    for hourly_data in byHour:
        l.append({
            "datetime": str(hourly_data.time),
            "timestamp": hourly_data.time.timestamp(),
            "temperature": hourly_data.temperature
        })

    return l

if __name__ == '__main__':
    d = get_weather_list(48.6238, 2.4296)
    print(d)
