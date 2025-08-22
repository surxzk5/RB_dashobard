# Release Butler Dashboard

A comprehensive release management dashboard for tracking multiple release trains and their schedules.

## 🎯 Features

- **Multi-Train Calendar View**: Track multiple release trains simultaneously
- **Interactive Calendar**: Navigate between months and filter by specific trains
- **Event Management**: View detailed release events with color coding
- **Real-time Updates**: Events loaded from JSON configuration

## 📊 Current Release Trains

- **July T1** (Jun 30 - Jul 25)
- **July T2** (Jul 14 - Aug 7)
- **August T1** (Jul 28 - Aug 21)
- **August T2** (Aug 11 - Sep 4)
- **September T2** (Sep 8 - Oct 1)

## 🛠️ Local Development

1. Clone the repository
2. Start the HTTP server:
   ```bash
   python3 -m http.server 8080
   ```
3. Open `http://127.0.0.1:8080/index.html`

## 🌐 GitHub Pages Deployment

This project is configured for GitHub Pages deployment. The main entry point is `index.html` in the root directory.

## 📁 Project Structure

```
RB_Dashboard/
├── index.html          # Main application file
├── events.json         # Release events configuration
├── package.json        # Node.js dependencies
├── webpack.config.js   # Webpack configuration
└── src/               # Source files
```

## 🎨 Event Types & Colors

- **Development**: Teal (#4ecdc4)
- **Deployment**: Blue (#45b7d1) / Red-orange (#ff4757)
- **Testing**: Orange (#ffa502)
- **Release**: Coral (#ff6348)
- **Approval**: Blue (#5352ed)
- **Final Release**: Green (#2ed573) 