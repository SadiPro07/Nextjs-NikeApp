import SwiftUI

struct CustomTimerView: View {
    let deliveryTimeRange: ClosedRange<Date>
    @State private var elapsedTime: TimeInterval = 0.0
    let lineWidth: CGFloat = 8.0

    var body: some View {
        VStack {
            ZStack {
                Circle()
                    .stroke(Color.secondary, lineWidth: lineWidth)
                    .frame(width: 100, height: 100)

                Circle()
                    .trim(from: 0.0, to: CGFloat(elapsedTime / totalTime))
                    .stroke(Color.blue, style: StrokeStyle(lineWidth: lineWidth, lineCap: .round))
                    .rotationEffect(.degrees(-90))
                    .animation(.easeInOut)

                Text(timerText)
                    .font(.caption)
                    .foregroundColor(.blue)
            }
        }
        .onAppear {
            startTimer()
        }
    }

    var totalTime: TimeInterval {
        if let startDate = deliveryTimeRange.lowerBound, let endDate = deliveryTimeRange.upperBound {
            return endDate.timeIntervalSince(startDate)
        }
        return 0.0 // Default value if the range is not valid
    }

    var timerText: String {
        let remainingTime = max(totalTime - elapsedTime, 0)
        let minutes = Int(remainingTime) / 60
        let seconds = Int(remainingTime) % 60
        return String(format: "%02d:%02d", minutes, seconds)
    }

    func startTimer() {
        let timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in
            if elapsedTime < totalTime {
                elapsedTime += 1.0
            }
        }
        RunLoop.current.add(timer, forMode: .common)
    }
}





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
