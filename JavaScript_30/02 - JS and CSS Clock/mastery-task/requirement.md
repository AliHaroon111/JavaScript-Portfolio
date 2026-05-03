Mastery Task: The "Global Business Dashboard"
The Scenario
A client wants a dashboard that tracks their server's "Uptime" and "Performance" in real-time. Instead of a clock, they want a Speedometer Gauge that updates every second to show how "busy" the server is.

Your Goal
Create a folder named 02-clock-mastery and build a Performance Gauge.

Requirements
The Gauge: Instead of 3 hands, create one "Needle."

The Source: Instead of using now.getSeconds(), use Math.random() * 100 to simulate a server's CPU usage (0% to 100%).

The Logic:

Map that 0-100 value to a rotation of 180 degrees (a semi-circle gauge).
Pro Challenge: If the "CPU usage" is over 80%, change the needle's color to Red. If it's under 80%, keep it Green.
The UI: Add a <span> or <div> that displays the actual number (e.g., "Current Load: 84%") so it updates along with the needle.