# FitLog — Workout Tracking App

FitLog is a modern workout tracking application built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**. It allows users to explore workouts, view workout details, save workouts, and create a plan for today's workout session.

## 🚀 Features

- 🏋️ Browse workouts with images and key information.
- 📋 Create and manage **Today's Plan**.
- 🔖 Save workouts for later.
- 🔍 View detailed workout information and instructions.
- 🔀 Sort workouts by Duration, Calories, or Rating.
- 🔔 Toast notifications for adding, saving, completing, and removing workouts.
- 📱 Responsive mobile and desktop design.
- 🎨 Dark fitness-focused UI with a lime accent.
- ⚠️ Custom error and 404 handling.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js** | React framework and routing |
| **React** | UI development |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling and responsive design |
| **DaisyUI** | UI components |
| **Lucide React** | Icons |
| **React Toastify** | Toast notifications |
| **Next/Image** | Image optimization |
| **Context API** | Global workout state |
| **REST API** | Workout data |

## 📁 Project Structure

```text
fitlog/
├── app/
│   ├── home/
│   │   ├── Banner.tsx
│   │   └── Workouts.tsx
│   ├── my-plan/
│   │   ├── page.tsx
│   │   └── error.tsx
│   ├── workouts/
│   │   ├── [id]/
│   │   │   ├── page.tsx
│   │   │   ├── error.tsx
│   │   │   └── not-found.tsx
│   │   └── error.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── workoutButtons/
│       ├── SavedWorkoutsButton.tsx
│       └── TodayWorkoutsButton.tsx
├── context/
│   └── WorkoutsProvider.tsx
├── Types/
│   └── workout.type.ts
├── assets/
│   ├── logo.png
│   └── banner.png
├── package.json
└── README.md
```

## 🧩 Main Components

### Navbar
Provides navigation between **Workouts** and **Plan**, with active-link highlighting and responsive mobile navigation.

### Footer
Provides FitLog branding, application information, and copyright details. It is integrated into the root layout.

### Banner
The homepage hero section containing the main fitness message, hero image, and an **Explore Workouts** button.

### Workouts
Displays available workouts including name, muscle groups, equipment, difficulty, duration, calories, and rating.

### Tabs
Manages the **Today's Plan** and **Saved** tabs. It supports sorting, viewing details, completing workouts, and removing workouts.

## 🏋️ Workout Buttons

### TodayWorkoutsButton
Adds a workout to today's plan and prevents duplicate entries.

### SavedWorkoutsButton
Saves a workout for later and prevents duplicate saved entries.

## 🧠 Context API

FitLog uses React Context for global workout state.

The `WorkoutsProvider` manages:

```tsx
todayWorkouts
setTodayWorkouts
savedWorkouts
setSavedWorkouts
```

## 📦 Workout Type

```tsx
export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: Difficulty;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
```

## 🌐 API

Workout data is fetched from:

```text
https://api.abcz.workers.dev/api/fitlog/
```

Individual workouts use:

```text
/api/fitlog/{id}
```

The details page uses the Next.js dynamic route:

```text
/workouts/[id]
```

## 🔔 Toast Notifications

FitLog uses **React Toastify** for user feedback.

```tsx
toast.success("Workout added!");
toast.info("Workout removed from saved workouts.");
toast.success("Workout completed!");
```

The `ToastContainer` is placed in the root layout.

## 🖼️ Image Optimization

Workout images use Next.js `Image`:

```tsx
<Image
  src={workout.image}
  alt={workout.name}
  fill
  className="object-cover"
/>
```

## ⚠️ Error Handling

FitLog includes custom Next.js error handling:

```text
app/error.tsx
app/my-plan/error.tsx
app/workouts/error.tsx
app/workouts/[id]/error.tsx
app/workouts/[id]/not-found.tsx
```

The `not-found.tsx` page is displayed when a requested workout cannot be found.

## 🎨 Design

FitLog uses a dark fitness-oriented design.

```text
Background: #111318
Card:       #191c22
Accent:     #c4f000
```

The lime accent is used for buttons, active navigation, icons, and interactive states.

## 📱 Responsive Design

Tailwind CSS responsive utilities are used throughout the application. Workout cards change from a vertical layout on smaller screens to a horizontal layout on larger screens.

## ⚙️ Installation

Clone the project:

```bash
git clone <your-repository-url>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📜 Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 🔮 Future Improvements

- 💾 LocalStorage persistence
- 👤 User authentication
- 📊 Workout progress dashboard
- 📅 Calendar-based workout planning
- 🔥 Workout streak tracking
- 📈 Progress statistics
- 🏆 Personal fitness goals
- 📝 Workout notes
- 🔎 Workout search and filtering

## 👨‍💻 Author

**Shaikat Barua**

Master of Information Technology — Software Engineering

GitHub: https://github.com/Shaikat0079

## 📄 License

This project is created for learning and portfolio purposes.
