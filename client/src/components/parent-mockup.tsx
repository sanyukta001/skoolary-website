// import { Check } from "lucide-react";
// import parentNotificationMockup from "../assets/bus_distance.png";
// import distanceTrackingMockup from "../assets/bus_tracking.png";

// export default function ParentMockupSection() {
//   return (
//     <section id="parent-mockup" className="py-16 lg:py-20" style={{ background: 'linear-gradient(to right, #55A5DA, #E3C370)' }}>
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-4">
//             See Parent App in Action
//           </h3>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto">
//             Keep guardians reassured with real-time notifications that show exactly where buses are and provide timely updates on every student's journey.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           <div className="flex justify-center">
//             <div className="relative">
//               <img 
//                 src={parentNotificationMockup} 
//                 alt="Parent App Notification - Bus arriving in 5 minutes"
//                 className="w-64 h-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
//               />
//               <div className="absolute -bottom-4 -left-4 bg-[#fde047] text-dark-gray px-4 py-2 rounded-lg text-sm font-semibold">
//                 Live Notifications
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <div className="relative">
//               <img 
//                 src={distanceTrackingMockup} 
//                 alt="Parent App Distance Tracking - Bus location and ETA"
//                 className="w-64 h-auto shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
//               />
//               <div className="absolute -bottom-4 -right-4 bg-white text-primary-blue px-4 py-2 rounded-lg text-sm font-semibold">
//                 Real-time Tracking
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-6 mt-12">
//           <div className="text-center text-white">
//             <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//               <Check className="h-8 w-8 text-white" />
//             </div>
//             <h4 className="text-lg font-semibold mb-2">Bus Arrival Alerts</h4>
//             <p className="text-white/80">Get notified when the bus is 5-10 minutes away from your stop</p>
//           </div>
//           <div className="text-center text-white">
//             <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//               <Check className="h-8 w-8 text-white" />
//             </div>
//             <h4 className="text-lg font-semibold mb-2">Distance Tracking</h4>
//             <p className="text-white/80">See exact distance and estimated arrival time in real-time</p>
//           </div>
//           <div className="text-center text-white">
//             <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//               <Check className="h-8 w-8 text-white" />
//             </div>
//             <h4 className="text-lg font-semibold mb-2">Safety Updates</h4>
//             <p className="text-white/80">Receive instant notifications when your child boards or leaves the bus</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }