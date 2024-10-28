
# EventSpot Lite

**EventSpot Lite** is a single-page web application where users can discover local events happening around them. This app is built with **React** and demonstrates a clean, modern UI with animations and responsiveness across devices.

## Features

- **Event Listing Page**: View a list of events with details like event name, date, and location.
- **Search Functionality**: Filter events by name or location.
- **Event Details Modal**: View additional event details (description and image) in a modal.
- **Responsive Design**: Optimized for desktop, tablet, and mobile views.
- **Smooth Animations**: Includes hover effects, modal transitions, and loading indicators.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/eventspot-lite.git
   cd eventspot-lite
   ```

2. **Install Dependencies**

   Install the required packages using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the Development Server**

   Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The app should open in your default web browser at `http://localhost:3000`.

---

## Project Structure

```
eventspot-lite/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── assets/             # Sample images
│   ├── components/         # React components (EventCard, EventList, etc.)
│   ├── data/               # Event data (mock data)
│   ├── App.js              # Main app component
│   ├── App.css             # Global styles
│   ├── index.js            # React entry point
│   └── index.css           # Basic resets and global styles
└── package.json            # Project dependencies and scripts
```

---

## Configuration

### Mock Data
The project uses mock data located in `src/data/events.js`. You can add more events or modify existing ones to suit your needs.

### Images
Sample images are provided in the `src/assets` folder. Update the image paths in `events.js` to use other images if needed.

---

## Scripts

- **`npm start`** - Runs the app in development mode.
- **`npm run build`** - Builds the app for production to the `build` folder.

---

## Deployment

You can deploy the built app on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/):

1. **Build the App**

   ```bash
   npm run build
   ```

   This creates an optimized build in the `build` directory.

2. **Deploy**

   - Upload the `build` folder to your hosting platform or link your GitHub repository to deploy automatically.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **CSS**: Styling and animations
- **JavaScript (ES6+)**: Language used for development

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License.
