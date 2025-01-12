# Full Stack Take-Home Assignment

This project is a full-stack application for visualizing polling data, betting odds, and geographic information using Google Maps.

---

## Features

- **Polling Data Visualization**: Interactive bar charts for state-wide polling data.
- **Betting Odds Trends**: Multi-line charts to analyze betting odds over time.
- **Interactive Google Maps**: Searchable and responsive maps for visualizing state locations and their polling data.

---

## Prerequisites

### Software/Tools Required

- Node.js and npm
- Python 3.12 and pip
- Django framework
- React.js (via Next.js for frontend development)
- Google Maps API Key

### Libraries and Dependencies

- Front-End: `recharts`, `axios`, `tailwindcss`, `@shadcn/ui`
- Back-End: `django`, `django-rest-framework`, `pandas`

---

## Getting Started: Installation Instructions

### 1. Clone the Repository

```bash
https://github.com/FawazOmidiya/STS_Poll_App.git
```

- Copy this line, and find the area in your editor that says "Clone Git Repository". If you are using VS Code, it will look something like this:
  ![Image of Clone Git Repo](./frontend_nextjs//sts_poll_app//public/cloneExample.png)
- Once you click on it, it will prompt you to choose an EMPTY folder, and for the link directly above. Paste it in and the repository will be cloned successfully.

- First, open a terminal in your new project, this will show at the bottom of your code editor. Use the terminal to run the remaining commands in this tutorial.

---

### 2. Setup Environment

- Run this command to activate and run the setup all the technical requirements:

```bash
chmod +x setup.sh
./setup.sh
```

### 3. Now run this command to start ther development server!

```bash
chmod +x start.sh
./start.sh

```

If you want to end the server, enter control C in the command line

```bash
^C
```

# Walk Through of Use Cases

## 1 . Polling Data

- The Polling data is available on the landing page, simply scroll through to view the different states and their information.

## 2. Google Maps

- To view the google map visualization, simply click on any of the state bar graphs to open up the detailed view of that state, and roam around in the familiar google maps interface.

- Alternatively, you can search up A specific state using the select button as shown below to arrive at the same detailed view.
  ![Dropdown Select Image](./frontend_nextjs/sts_poll_app/public/SelectView.png)
- In this view you can view an additional Pie Chart of the graph, and zoom in to your preferred location.

## 3. Betting Odds

- For this section, simply navigate over to the Odds title in the heading. The odds will be displayed, and you can easiluy navigate back and forth between the two.
