import SwiftUI

let FULL_DASH_ARRAY = 283
let WARNING_THRESHOLD = 180 / 4
let ALERT_THRESHOLD = 18

struct BaseTimerView: View {
    @State private var timePassed: Int = 0
    @State private var timerInterval: Timer? = nil
    let circleOpacity: Double
    let strokeWidth: CGFloat = 6
    
    var timeLeftValue: Int {
        return max(TIME_LIMIT - timePassed, 0)
    }
    
    var timeFraction: CGFloat {
        let rawTimeFraction = CGFloat(timeLeftValue) / CGFloat(TIME_LIMIT)
        return rawTimeFraction - (1 / CGFloat(TIME_LIMIT)) * (1 - rawTimeFraction)
    }
    
    var circleDasharray: String {
        return "\(Int(timeFraction * CGFloat(FULL_DASH_ARRAY))) \(FULL_DASH_ARRAY)"
    }
    
    var formattedTimeLeft: String {
        let timeLeft = timeLeftValue
        let minutes = timeLeft / 60
        let seconds = timeLeft % 60
        return String(format: "%02d:%02d", minutes, seconds)
    }
    
    var remainingPathColor: Color {
        if timeLeftValue <= ALERT_THRESHOLD {
            return Color.red
        } else if timeLeftValue <= WARNING_THRESHOLD {
            return Color.orange
        } else {
            return Color.green
        }
    }
    
    var body: some View {
        VStack {
            ZStack {
                Circle()
                    .trim(from: 0, to: timeFraction)
                    .stroke(style: StrokeStyle(lineWidth: strokeWidth, lineCap: .round, lineJoin: .round))
                    .foregroundColor(remainingPathColor)
                    .rotationEffect(.degrees(-90))
                    .animation(.easeInOut)
                
                Circle()
                    .stroke(style: StrokeStyle(lineWidth: strokeWidth, lineCap: .round, lineJoin: .round))
                    .foregroundColor(Color(white: 0.9).opacity(circleOpacity))
                
                Text(formattedTimeLeft)
                    .font(.title)
            }
        }
        .onAppear {
            startTimer()
        }
        .onDisappear {
            timerInterval?.invalidate()
        }
    }
    
    func startTimer() {
        timerInterval = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { _ in
            timePassed += 1
            if timeLeftValue <= 0 {
                timerInterval?.invalidate()
            }
        }
    }
}

struct ContentView: View {
    var body: some View {
        BaseTimerView(circleOpacity: 0.5)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

struct BaseTimer_Previews: PreviewProvider {
    static var previews: some View {
        BaseTimerView(circleOpacity: 0.5)
    }
}

let TIME_LIMIT = 180




# Nike App Website

<img src="https://github.com/SadiPro07/Nextjs-NikeApp/assets/109628645/755e5a02-aea7-4111-98ed-c910c5d3047e" />
 <!-- Replace![nike1](https://github.com/SadiPro07/Nextjs-NikeApp/assets/109628645/755e5a02-aea7-4111-98ed-c910c5d3047e)
 with an attractive header image -->

Elevate your shopping experience with the Nike App Website. Discover a world of stylish footwear and apparel, powered by modern technologies.

## Features

- **Home Page**: Browse through categories of products and explore the latest trends.
- **Product Details**: Get in-depth information about each product and view high-quality images.
- **Cart Functionality**: Add products to your cart, with persistent data across sessions.
- **User-Friendly UI**: Enjoy a sleek and responsive user interface for easy navigation.
- **Context API**: Efficiently manage global state using Context API for enhanced performance.

## Technologies Used

- **Frontend**: Developed using React and Next.js, offering server-side rendering for optimized performance.
- **Styling**: Utilized Tailwind CSS for stylish and responsive designs.
- **State Management**: Managed global state seamlessly using Context API.
- **Type Safety**: Employed TypeScript for enhanced code reliability and better development experience.


## Screenshots

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/SadiPro07/Nextjs-NikeApp/assets/109628645/798a1205-51a2-40ba-97c7-4bae327ffb5d" alt="Home Page" width="45%">
  <img src="https://github.com/SadiPro07/Nextjs-NikeApp/assets/109628645/7c655ca1-02c4-43f2-99dc-1af47ab9b720" alt="Product Details" width="45%">
</div>
<!-- Replace with your screenshot images and adjust the width values as needed -->

*Explore categories and discover the latest products. Dive into detailed product information.*

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/SadiPro07/Nextjs-NikeApp/assets/109628645/f7dc4ad3-344a-42ab-a914-5a2099515ccb" alt="Cart Functionality" width="45%">
  <img src="https://github.com/SadiPro07/Nextjs-NikeApp/assets/109628645/7e7d278e-ec3d-4e36-bb5e-181a4b74535f" alt="Responsive Design" width="45%">
</div>
<!-- Replace with your screenshot images and adjust the width values as needed -->

*Add items to your cart and enjoy a responsive design for various devices.*


## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/nike-app-website.git`
2. Navigate to the project directory: `cd nike-app-website`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`
5. Access the website in your browser: `http://localhost:3000`


## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

Created by [Your Name](https://github.com/your-username) - Let's connect!
