# TeamTrack - Employee Management Platform

A modern, full-stack employee management system built with React.js and Node.js, designed to streamline team collaboration, task management, and employee oversight.

## 🚀 Features

### Core Functionality
- **Employee Management**: Comprehensive employee profiles with role-based access control
- **Task Management**: Create, assign, and track tasks with real-time updates
- **Team Collaboration**: Built-in communication tools and team dashboards
- **Performance Tracking**: Monitor employee performance and project progress
- **Authentication & Authorization**: Secure login system with JWT tokens

### Technical Features
- **Real-time Updates**: Live notifications and status changes
- **Responsive Design**: Mobile-first responsive UI
- **Local Storage**: Persistent data storage for offline capability
- **Role-based Access**: Different permissions for admins, managers, and employees
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Framework
- **React Router** - Client-side routing
- **Context API** - State management
- **Local Storage** - Data persistence
- **CSS Modules** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework


## 📁 Project Structure

```
TeamTrack/
├── EMS/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/          # Authentication components
│   │   │   ├── dashboard/       # Dashboard components
│   │   │   ├── employee/        # Employee management
│   │   │   ├── other/           # Task and utility components
│   │   ├── context/             # React Context providers
│   │   ├── utils/              # Utility functions
│   │   └── App.jsx            # Main application component
├── public/
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vickey0088/TeamTrack-Team-Management-System-.git
   cd TeamTrack-Team-Management-System-
   ```

2. **Install dependencies**
   ```bash
   cd EMS
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎯 Usage

### For Admins
- Manage all employees and teams
- Create and assign tasks
- Monitor overall system performance
- Configure system settings

### For Managers
- Manage team members
- Assign and track tasks
- Review team performance
- Generate reports

### For Employees
- View assigned tasks
- Update task progress
- Collaborate with team members
- Track personal performance

## 🔐 Authentication

The system uses JWT-based authentication with the following roles:
- **Admin**: Full system access
- **Manager**: Team management access
- **Employee**: Personal task access

## 📊 Key Components

### Task Management
- Create new tasks with detailed descriptions
- Assign tasks to team members
- Set priorities and deadlines
- Track progress with status updates

### Employee Profiles
- Complete employee information
- Role and department management
- Performance metrics
- Contact information

### Dashboard
- Real-time task overview
- Team performance metrics
- Recent activity feed
- Quick action buttons

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Enhanced user experience
- **Intuitive Navigation**: Easy-to-use interface
- **Loading States**: Clear feedback during operations

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_JWT_SECRET=your-secret-key
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Vickey** - Project Lead & Full-Stack Developer

## 📞 Support

For support, email vickey@teamtrack.com or join our Slack channel.

## 🔄 Changelog

### v1.0.0
- Initial release
- Basic employee management
- Task assignment system
- Authentication system
- Responsive design

---

**TeamTrack** - Empowering teams to achieve more together.

By Vickey Yadav..............................................................................................................................

