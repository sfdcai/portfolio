# VisionVox: Real-Time Multimodal Voice & Vision Companion
## Accessibility App built on Gemini Live API

## 1. Context
For visually impaired individuals, navigating physical environments can be challenging. **VisionVox** is a real-time voice and vision companion designed to describe surroundings through a camera feed.

## 2. Technical Stack
* **Frontend:** React / Vite
* **Protocol:** WebSockets
* **Model:** `models/gemini-3.1-flash-live-preview` (Gemini Multimodal Live API)
* **Audio:** Low-latency PCM16 audio streaming
* **Hosting:** Vercel

## 3. Core Capabilities

### Spatial Scene Description
* Converts the camera feed into a real-time stream.
* Organizes description using a four-quadrant spatial scan:
  * Top-Left, Top-Right, Bottom-Left, Bottom-Right.
* Paints a clear mental picture using spoken audio (e.g., "There is a door on your upper-left, and a coffee table on your lower-right").

### Proactive Safety Alerts
* The model evaluates the video stream and immediately interrupts the audio feed if a hazard is detected (e.g., steps, approaching vehicles, obstacles in walking path).

### Real-Time OCR Reading
* Reads text, signs, and labels in real-time, helping users read menus, warnings, or transit schedules.

## 4. Engineering Impact
* **Low Latency:** Achieved sub-second audio-to-audio feedback loops using binary WebSocket connections.
