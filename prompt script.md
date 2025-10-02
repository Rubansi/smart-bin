# 🗑 Waste Management App Prompt Script (Gemini CLI + Supabase)

------

## **Step 1: Define App Architecture**

**Goal:** Get Gemini to outline the system architecture.

**Prompt:**
 “Generate a waste management mobile app architecture with these features:

- Authentication (sign up, sign in, Supabase integration)
- Waste pickup scheduler
- Payment integration (Stripe + M-Pesa)
- Notifications system
- User dashboard & admin dashboard
- Optional driver app module
   Show how these components interact with Supabase backend. Include both frontend and backend layers.”

------

## **Step 2: Database Schema (Supabase)**

**Goal:** Get schema for tables & relationships.

**Prompt:**
 “Design a Supabase database schema for a waste management app. Include tables for:

- Users (with roles: user, driver, admin)
- Pickups (date, time, type of waste, status, assigned driver)
- Payments (transaction ID, user, amount, type of payment, status)
- Notifications
- Subscriptions
   Schema should support recurring pickups, subscription payments, and role-based access.”

------

## **Step 3: Authentication System**

**Goal:** Build auth flow with Supabase.

**Prompt:**
 “Generate mobile app authentication flows with Supabase as backend. Features:

- Sign up (email, phone, Google OAuth)
- Sign in
- Forgot password
- Profile setup screen
   Include sample code snippets for Supabase auth + UI wireframes. Theme: orange & green.”

------

## **Step 4: Waste Pickup Scheduler**

**Goal:** UI + backend logic for pickup scheduling.

**Prompt:**
 “Generate mobile app UI + backend logic for scheduling waste pickup. Features:

- Select date & time (calendar picker)
- Choose waste type (general, recyclable, hazardous)
- Recurring scheduling (weekly, monthly)
- Assign driver automatically from available pool
- Store in Supabase pickups table
   Include clean mobile UI wireframes + backend functions.”

------

## **Step 5: Payments & Monetization**

**Goal:** Add revenue model (subscription + one-time payments).

**Prompt:**
 “Generate payment system integration for a waste management app. Include:

- Subscription model (monthly, quarterly, yearly)
- Pay-per-pickup option
- Payment history screen
- Payment gateway options (Stripe + M-Pesa)
- Supabase integration for storing transactions
   Provide mobile UI wireframes for checkout flow and confirmation.”

------

## **Step 6: Notifications**

**Goal:** Alerts for users & admins.

**Prompt:**
 “Generate a notifications system for a waste management app. Features:

- Push notifications for reminders & payment confirmations
- In-app notifications for pickup updates
- SMS/email fallback
- Supabase backend for storing notification logs
   Include example UI screens for alerts and push notification flows.”

------

## **Step 7: User Dashboard**

**Goal:** Central hub for users.

**Prompt:**
 “Generate mobile user dashboard UI for waste management app. Sections:

- Upcoming pickups
- Pickup history
- Payment history
- Subscription status
- Environmental impact tracker (stats: e.g. waste recycled)
   Use minimal design with orange & green highlights.”

------

## **Step 8: Admin Dashboard**

**Goal:** Admin control panel.

**Prompt:**
 “Generate web-based admin dashboard UI for a waste management system. Features:

- Manage users (view, suspend, assign roles)
- Manage pickups (assign drivers, track status)
- View revenue reports & payment history
- Analytics dashboard (waste trends, busiest days, recycling stats)
- Map view of active pickups (Google Maps API)
   Design should be simple, modern, and data-focused.”

------

## **Step 9: Driver App (Optional Future Phase)**

**Goal:** Create a collector interface.

**Prompt:**
 “Generate a mobile app UI for waste collection drivers. Features:

- Assigned job list
- Map navigation to pickup points
- Status updates (accepted, on-route, completed)
- Earnings tracker
- Supabase backend integration for pickups & status updates.”

------

## **Step 10: Extra Features for Competitive Edge**

**Goal:** Make app engaging & unique.

**Prompt:**
 “Suggest and generate UI/UX flows for extra features in a waste management app. Examples:

- Gamification (points for recycling)
- Referral program with credits
- AI-powered sorting tips for waste categories
- Community impact dashboard (neighborhood stats)
   Provide wireframes for at least 2 of these features.”

------

👉 This **script** gives you a roadmap:

1. Architecture → 2. Database → 3. Auth → 4. Scheduler → 5. Payments → 6. Notifications → 7. User UI → 8. Admin → 9. Driver → 10. Extras.

------

