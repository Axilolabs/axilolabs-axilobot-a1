# Axilobot - Complete Development Documentation
**AI-Powered Customer Service Chatbot Platform**

**Version**: 1.0  
**Last Updated**: November 2025  
**Project Status**: Phase 1 Complete, Phase 2 Starting  
**Developer**: Naruto  
**Tech Stack**: Next.js, TypeScript, Supabase, Google Gemini AI

---

# Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Market Analysis](#2-market-analysis)
3. [Business Model](#3-business-model)
4. [Technical Architecture](#4-technical-architecture)
5. [Database Schema](#5-database-schema)
6. [Development Phases](#6-development-phases)
7. [API Reference](#7-api-reference)
8. [Git Workflow](#8-git-workflow)
9. [Timeline & Milestones](#9-timeline--milestones)
10. [Future Roadmap](#10-future-roadmap)

---

# 1. Executive Summary

## 1.1 What is Axilobot?

Axilobot is a SaaS platform that provides AI-powered customer service chatbots for businesses. Companies can create intelligent chatbots and deploy them across multiple platforms (WordPress, Shopify, Wix, custom websites) to automatically handle customer inquiries 24/7.

## 1.2 The Problem We Solve

**For Small Businesses:**
- Can't afford 24/7 customer support staff
- Lose customers due to slow response times
- Miss inquiries outside business hours
- Struggle with repetitive questions

**For Medium/Large Businesses:**
- Customer support costs are high
- Need to scale support without proportional cost increase
- Want to reduce first-response time
- Need multi-channel support

## 1.3 Our Solution

A simple, affordable AI chatbot platform that:
- **Easy Setup**: Create chatbot in 5 minutes
- **Multi-Platform**: Works on WordPress, Shopify, Wix, any website
- **AI-Powered**: Intelligent responses using Google Gemini (upgradable to Claude/GPT-4)
- **Affordable**: Free tier to start, paid plans as you grow
- **No Coding**: Simple dashboard interface
- **Analytics**: Track conversations, measure performance

## 1.4 Unique Value Proposition

| Feature | Axilobot | Competitors |
|---------|----------|-------------|
| **Free Tier** | ✅ Generous limits | ❌ Limited/No free tier |
| **Multi-Platform** | ✅ WordPress, Shopify, Wix, Custom | ✅ Most have this |
| **AI Model Choice** | ✅ Start free (Gemini), upgrade (Claude) | ❌ Locked to one provider |
| **Easy Setup** | ✅ 5 minutes | ⚠️ 15-30 minutes |
| **Pricing** | 💰 $0-$49/mo | 💰💰 $29-$139/mo |
| **No Code Required** | ✅ | ✅ Most have this |

---

# 2. Market Analysis

## 2.1 Market Size

**Global Chatbot Market:**
- 2024: $5.4 billion
- 2030: $15.5 billion (projected)
- CAGR: 19.3%

**Target Customers:**
- Small businesses (1-50 employees): 33.2 million globally
- E-commerce businesses: 26.5 million
- WordPress sites: 835 million websites
- Shopify stores: 4.4 million

## 2.2 Competitive Analysis

### **Direct Competitors:**

#### **1. Intercom**
- **Pricing**: $39-$139/month
- **Strengths**: Established brand, full platform, enterprise features
- **Weaknesses**: Expensive, overkill for small businesses
- **Our Advantage**: 80% cheaper, simpler for SMBs

#### **2. Tidio**
- **Pricing**: $29-$749/month
- **Strengths**: Good WordPress integration, live chat + bots
- **Weaknesses**: UI complexity, expensive at scale
- **Our Advantage**: Better AI quality, simpler pricing

#### **3. Chatbase**
- **Pricing**: $19-$99/month
- **Strengths**: Custom AI training, good for knowledge bases
- **Weaknesses**: No free tier, limited platforms
- **Our Advantage**: Free tier, more platforms

#### **4. Drift**
- **Pricing**: $2,500+/month
- **Strengths**: Enterprise sales focus, advanced features
- **Weaknesses**: Extremely expensive, sales-focused not support
- **Our Advantage**: 98% cheaper, support-focused

### **Market Positioning:**
```
Price vs Features Matrix:

High Price │                    Drift
           │              Intercom
           │         Tidio
           │    Chatbase
           │  [AXILOBOT] ← We compete here
Low Price  │  Free Tier
           └────────────────────────────
          Basic              Advanced
                Features
```

**Our Sweet Spot:** Mid-market features at low-market pricing

## 2.3 Target Customer Personas

### **Persona 1: Sarah - Small Business Owner**
- **Business**: Local bakery with website
- **Size**: 3 employees
- **Pain**: Can't answer website inquiries while baking
- **Budget**: $0-$20/month
- **Tech Level**: Basic (can install WordPress plugins)
- **Why Axilobot**: Free tier, easy WordPress setup

### **Persona 2: Mike - E-commerce Store Owner**
- **Business**: Shopify dropshipping store
- **Size**: Solo entrepreneur
- **Pain**: Loses sales from unanswered questions
- **Budget**: $20-$50/month
- **Tech Level**: Intermediate
- **Why Axilobot**: Shopify integration, affordable, 24/7 support

### **Persona 3: Jennifer - Marketing Manager**
- **Business**: SaaS startup (20 employees)
- **Size**: Growing team
- **Pain**: Support tickets overwhelming small team
- **Budget**: $50-$200/month
- **Tech Level**: Advanced
- **Why Axilobot**: Multi-site support, analytics, scalable

---

# 3. Business Model

## 3.1 Revenue Model: SaaS Subscription

### **Pricing Tiers:**

#### **Free Tier - "Starter"**
**Price**: $0/month  
**Limits**:
- 1 chatbot
- 100 conversations/month
- 500 messages/month
- Google Gemini AI
- Email support
- "Powered by Axilobot" branding

**Target**: Solopreneurs, testing the waters

---

#### **Pro Tier**
**Price**: $29/month  
**Includes**:
- 3 chatbots
- 1,000 conversations/month
- 5,000 messages/month
- Google Gemini AI
- Remove branding
- Priority email support
- Basic analytics

**Target**: Small businesses, single website with traffic

---

#### **Business Tier**
**Price**: $79/month  
**Includes**:
- 10 chatbots
- 5,000 conversations/month
- 25,000 messages/month
- Choice: Gemini or Claude AI
- Custom branding
- Phone support
- Advanced analytics
- API access

**Target**: Growing businesses, agencies, multiple sites

---

#### **Enterprise Tier**
**Price**: $199/month  
**Includes**:
- Unlimited chatbots
- Unlimited conversations
- Unlimited messages
- Premium AI (Claude Opus, GPT-4)
- White-label solution
- Dedicated support
- Custom integration
- SLA guarantee

**Target**: Large businesses, enterprise clients

---

## 3.2 Revenue Projections

### **Conservative Estimates (Year 1):**

| Month | Free Users | Paid Users | MRR | ARR |
|-------|-----------|------------|-----|-----|
| 1-3 | 50 | 2 | $58 | $696 |
| 4-6 | 150 | 10 | $290 | $3,480 |
| 7-9 | 300 | 30 | $870 | $10,440 |
| 10-12 | 500 | 75 | $2,175 | $26,100 |

**Key Assumptions:**
- 10% free-to-paid conversion rate (industry standard: 2-5%)
- 80% retention rate
- Average plan: $29/month
- Marketing: Organic + $500/month ads

### **Growth Levers:**

1. **Conversion Optimization**: Free → Paid
   - Hit message limits → Upgrade
   - Want to remove branding → Upgrade
   - Need multiple chatbots → Upgrade

2. **Upselling**: Pro → Business → Enterprise
   - Traffic growth → Need higher limits
   - Want better AI → Upgrade to Claude
   - Multiple websites → Need more chatbots

3. **Retention**:
   - Locked-in data (conversation history)
   - API integrations
   - Custom training on their data

---

## 3.3 Cost Structure

### **Fixed Costs (Monthly):**

| Item | Cost | Notes |
|------|------|-------|
| Vercel (Hosting) | $0-20 | Free tier, then $20/mo |
| Supabase (Database) | $0-25 | Free tier, then $25/mo |
| Domain | $1 | axilobot.com |
| **Total Fixed** | **$1-46** | **Scales with usage** |

### **Variable Costs (Per User):**

| Item | Cost | Notes |
|------|------|-------|
| Gemini API | $0.0001/msg | Free tier: 60 requests/min |
| Claude API | $0.015/1K tokens | Only for paid users who choose it |
| Storage | $0.02/GB | Minimal (text only) |

### **Margins:**

- **Free Tier**: -$0.50/user (cost of acquisition + support)
- **Pro Tier ($29)**: ~$25 profit margin (86%)
- **Business Tier ($79)**: ~$70 profit margin (89%)
- **Enterprise Tier ($199)**: ~$180 profit margin (90%)

**Target Gross Margin**: 85%+ (SaaS industry standard: 70-90%)

---

## 3.4 Go-to-Market Strategy

### **Phase 1: Launch (Months 1-3)**

**Goal**: Get first 10 paying customers

**Tactics**:
1. **Product Hunt Launch**
   - Create compelling landing page
   - Demo video (2 minutes)
   - Offer lifetime free tier
   - Goal: 500+ upvotes, #1 product of the day

2. **WordPress Plugin Directory**
   - Submit plugin (free)
   - SEO-optimized description
   - Goal: 1,000 installations in Month 1

3. **Content Marketing**
   - Blog: "How to Add AI Chatbot to WordPress"
   - YouTube tutorial
   - Reddit posts (r/wordpress, r/entrepreneur)

4. **Direct Outreach**
   - 100 emails to small businesses
   - Offer free setup assistance

**Budget**: $500 (ads + tools)

---

### **Phase 2: Growth (Months 4-6)**

**Goal**: 50 paying customers, $1,500 MRR

**Tactics**:
1. **Paid Advertising**
   - Google Ads: "WordPress chatbot" ($300/mo)
   - Facebook Ads: Small business owners ($200/mo)

2. **Partnerships**
   - WordPress theme developers (affiliate program)
   - Web design agencies (white-label offering)

3. **SEO**
   - 20 blog posts (chatbot + WordPress keywords)
   - Backlink building
   - Goal: Rank #1 for "WordPress AI chatbot"

4. **Customer Success**
   - Case studies from early customers
   - Video testimonials
   - Referral program (20% discount)

**Budget**: $1,500/month

---

### **Phase 3: Scale (Months 7-12)**

**Goal**: 200 paying customers, $6,000 MRR

**Tactics**:
1. **Multi-Platform Expansion**
   - Shopify app launch
   - Wix app launch
   - Webflow integration

2. **Enhanced Features**
   - Advanced analytics dashboard
   - Custom AI training
   - Integrations (Slack, Zapier)

3. **Community Building**
   - Facebook group for users
   - Monthly webinars
   - User-generated content

4. **PR & Media**
   - Startup publications (TechCrunch, BetaList)
   - Podcast appearances
   - Industry awards

**Budget**: $3,000/month

---

# 4. Technical Architecture

## 4.1 System Architecture Overview
```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT LAYER                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Website    │  │  WordPress   │  │   Shopify    │ │
│  │   Visitor    │  │    Admin     │  │    Admin     │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                  │                  │          │
│         └──────────────────┼──────────────────┘          │
│                            │                             │
└────────────────────────────┼─────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────┐
│                  APPLICATION LAYER                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │         Next.js Frontend (Dashboard)               │ │
│  │         - Customer portal                          │ │
│  │         - Chatbot management                       │ │
│  │         - Analytics dashboard                      │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │         Next.js API Routes (Backend)               │ │
│  │         ┌────────────┬────────────┬──────────────┐ │ │
│  │         │ Auth APIs  │ Chat APIs  │ Admin APIs   │ │ │
│  │         └────────────┴────────────┴──────────────┘ │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
└────────────────────────────┬─────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────┐
│                    DATA & SERVICES LAYER                 │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Supabase   │  │    Google    │  │    Vercel    │ │
│  │  PostgreSQL  │  │   Gemini AI  │  │   Hosting    │ │
│  │   + Auth     │  │              │  │  (Serverless)│ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 4.2 Technology Stack Breakdown

### **Frontend Technologies**

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.0.1 | React framework, SSR, API routes |
| **React** | 19.2.0 | UI components |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Styling framework |

**Why Next.js?**
- ✅ Full-stack framework (frontend + backend in one)
- ✅ Serverless API routes (auto-scaling)
- ✅ Great developer experience
- ✅ SEO-friendly (SSR)
- ✅ Vercel deployment (made by same team)

---

### **Backend Technologies**

| Technology | Purpose | Free Tier |
|-----------|---------|-----------|
| **Next.js API Routes** | RESTful APIs | ✅ Unlimited |
| **Supabase** | PostgreSQL database | ✅ 500MB, 50K rows |
| **Supabase Auth** | User authentication | ✅ 50K MAU |
| **Google Gemini** | AI responses | ✅ 60 req/min |

**Why Supabase?**
- ✅ PostgreSQL (reliable, scalable)
- ✅ Built-in auth (saves dev time)
- ✅ Real-time subscriptions (future feature)
- ✅ Generous free tier
- ✅ Easy to use (like Firebase but better)

**Why Google Gemini?**
- ✅ Free tier (60 requests/min)
- ✅ Good quality responses
- ✅ Fast response time
- ✅ Easy API
- ➡️ Can upgrade to Claude/GPT-4 later

---

### **Infrastructure & Deployment**

| Service | Purpose | Cost |
|---------|---------|------|
| **Vercel** | Hosting, CDN, serverless functions | Free → $20/mo |
| **GitHub** | Version control, CI/CD | Free |
| **Cloudflare** | DNS, DDoS protection (future) | Free |

**Deployment Flow:**
```
Code Push → GitHub → Auto Deploy → Vercel → Live
```

**Deployment Time:** ~2 minutes  
**Rollback Time:** ~30 seconds

---

## 4.3 Security Architecture

### **Authentication & Authorization**

**Customer Authentication:**
- Supabase Auth (JWT tokens)
- Session-based authentication
- Password hashing (bcrypt)
- Email verification required

**API Key Authentication:**
- Chatbot API keys (for widget embedding)
- Format: `axb_` + 32 random characters
- Stored hashed in database
- Rate limited per key

### **Security Measures**

| Layer | Protection | Implementation |
|-------|-----------|----------------|
| **Transport** | HTTPS only | Vercel (auto SSL) |
| **API** | Rate limiting | 100 req/hour per IP |
| **Database** | Row Level Security | Supabase RLS policies |
| **Auth** | JWT tokens | 24-hour expiry |
| **Data** | Input validation | Zod schemas |
| **CORS** | Whitelist domains | Next.js config |

### **Data Privacy**

- **GDPR Compliant**: User data deletion API
- **Data Encryption**: At rest (Supabase), in transit (HTTPS)
- **No PII in Logs**: Sanitized error logs
- **Cookie Consent**: Required before tracking

---

## 4.4 Scalability Design

### **Current Capacity (Free Tier):**

| Resource | Limit | Sufficient For |
|----------|-------|----------------|
| **Vercel** | 100GB bandwidth/mo | 10,000 visitors/mo |
| **Supabase** | 500MB storage | 50,000 messages |
| **Gemini API** | 60 req/min | 86,400 messages/day |

**Conclusion**: Free tier handles ~100 active chatbots

### **Scaling Strategy:**

**0-100 users** (Months 1-6):
- ✅ Free tiers only
- Cost: $0/month
- Manual monitoring

**100-1,000 users** (Months 7-12):
- Upgrade Vercel: $20/month
- Upgrade Supabase: $25/month
- Cost: $45/month base + $0.02/user variable

**1,000-10,000 users** (Year 2):
- Vercel Pro: $20/month
- Supabase Pro: $25/month
- CDN (Cloudflare): $20/month
- Cost: $65/month base + variable costs

**Scaling Bottlenecks to Watch:**
1. ⚠️ **Database connections**: Max 15 on free tier
   - Solution: Connection pooling (Supabase Pooler)
2. ⚠️ **API rate limits**: Gemini 60 req/min
   - Solution: Queue system, upgrade to paid tier
3. ⚠️ **Serverless function timeout**: 10 seconds free, 60s paid
   - Solution: Optimize AI prompts, upgrade Vercel

---

# 5. Database Schema

## 5.1 Complete Schema Diagram
```
┌─────────────────────────────────────────────────────────┐
│                     CUSTOMERS                           │
│─────────────────────────────────────────────────────────│
│ PK  id                 UUID                             │
│     email              TEXT (UNIQUE)                     │
│     password_hash      TEXT                             │
│     company_name       TEXT                             │
│     subscription_tier  TEXT (free/pro/business/ent)     │
│     subscription_ends  TIMESTAMP                        │
│     created_at         TIMESTAMP                        │
└───────────────┬─────────────────────────────────────────┘
                │
                │ 1:N
                │
┌───────────────▼─────────────────────────────────────────┐
│                      CHATBOTS                           │
│─────────────────────────────────────────────────────────│
│ PK  id                 UUID                             │
│ FK  customer_id        UUID → customers.id              │
│     name               TEXT                             │
│     website_url        TEXT                             │
│     widget_color       TEXT (#HEX)                      │
│     welcome_message    TEXT                             │
│     ai_model           TEXT (gemini/claude/gpt4)        │
│     api_key            TEXT (UNIQUE, HASHED)            │
│     is_active          BOOLEAN                          │
│     created_at         TIMESTAMP                        │
│     updated_at         TIMESTAMP                        │
└───────────────┬─────────────────────────────────────────┘
                │
                │ 1:N
                │
┌───────────────▼─────────────────────────────────────────┐
│                   CONVERSATIONS                         │
│─────────────────────────────────────────────────────────│
│ PK  id                 UUID                             │
│ FK  chatbot_id         UUID → chatbots.id               │
│     visitor_id         TEXT (anonymous hash)            │
│     visitor_ip         TEXT (hashed)                    │
│     visitor_country    TEXT                             │
│     started_at         TIMESTAMP                        │
│     ended_at           TIMESTAMP (NULL)                 │
│     message_count      INTEGER                          │
│     rating             INTEGER (1-5, NULL)              │
└───────────────┬─────────────────────────────────────────┘
                │
                │ 1:N
                │
┌───────────────▼─────────────────────────────────────────┐
│                      MESSAGES                           │
│─────────────────────────────────────────────────────────│
│ PK  id                 UUID                             │
│ FK  conversation_id    UUID → conversations.id          │
│     role               TEXT (user/assistant)            │
│     content            TEXT                             │
│     tokens_used        INTEGER                          │
│     response_time_ms   INTEGER                          │
│     created_at         TIMESTAMP                        │
└─────────────────────────────────────────────────────────┘
```

## 5.2 Table Specifications

### **Table: customers**

**Purpose:** Stores business customers who use Axilobot platform

| Column | Type | Constraints | Default | Description |
|--------|------|-------------|---------|-------------|
| id | UUID | PRIMARY KEY | gen_random_uuid() | Unique customer identifier |
| email | TEXT | UNIQUE, NOT NULL | - | Customer login email |
| password_hash | TEXT | NOT NULL | - | Bcrypt hashed password |
| company_name | TEXT | NULL | - | Business/company name |
| subscription_tier | TEXT | NOT NULL | 'free' | Subscription plan |
| subscription_ends | TIMESTAMP | NULL | - | Subscription expiry date |
| stripe_customer_id | TEXT | NULL | - | Stripe customer reference |
| created_at | TIMESTAMP | NOT NULL | NOW() | Account creation timestamp |

**Indexes:**
```sql
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_customers_subscription ON customers(subscription_tier);
```

**Row Level Security (RLS):**
```sql
-- Customers can only read their own data
CREATE POLICY select_own_customer ON customers
  FOR SELECT USING (auth.uid() = id);

-- Customers can update their own data
CREATE POLICY update_own_customer ON customers
  FOR UPDATE USING (auth.uid() = id);
```

---

### **Table: chatbots**

**Purpose:** Each customer can create multiple chatbots for different websites

| Column | Type | Constraints | Default | Description |
|--------|------|-------------|---------|-------------|
| id | UUID | PRIMARY KEY | gen_random_uuid() | Unique chatbot identifier |
| customer_id | UUID | FOREIGN KEY, NOT NULL | - | Owner customer |
| name | TEXT | NOT NULL | - | Chatbot display name |
| website_url | TEXT | NULL | - | Deployment URL |
| widget_color | TEXT | NOT NULL | '#3B82F6' | Widget theme (hex color) |
| welcome_message | TEXT | NOT NULL | 'Hi! How can I help?' | Initial greeting |
| ai_model | TEXT | NOT NULL | 'gemini' | AI model (gemini/claude/gpt4) |
| api_key | TEXT | UNIQUE, NOT NULL | - | API key for widget |
| is_active | BOOLEAN | NOT NULL | TRUE | Chatbot enabled status |
| created_at | TIMESTAMP | NOT NULL | NOW() | Creation timestamp |
| updated_at | TIMESTAMP | NOT NULL | NOW() | Last update timestamp |

**Foreign Keys:**
```sql
FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
```

**Indexes:**
```sql
CREATE INDEX idx_chatbots_customer ON chatbots(customer_id);
CREATE UNIQUE INDEX idx_chatbots_api_key ON chatbots(api_key);
CREATE INDEX idx_chatbots_active ON chatbots(is_active);
```

**API Key Generation:**
```typescript
// Format: axb_ + 32 random characters
const generateApiKey = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = 'axb_';
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }}
  return key;
};
```

**RLS Policies:**
```sql
-- Customers can only access their own chatbots
CREATE POLICY select_own_chatbots ON chatbots
  FOR SELECT USING (customer_id = auth.uid());

CREATE POLICY insert_own_chatbots ON chatbots
  FOR INSERT WITH CHECK (customer_id = auth.uid());

CREATE POLICY update_own_chatbots ON chatbots
  FOR UPDATE USING (customer_id = auth.uid());

CREATE POLICY delete_own_chatbots ON chatbots
  FOR DELETE USING (customer_id = auth.uid());
```

---

### **Table: conversations**

**Purpose:** Tracks chat sessions between website visitors and chatbots

| Column | Type | Constraints | Default | Description |
|--------|------|-------------|---------|-------------|
| id | UUID | PRIMARY KEY | gen_random_uuid() | Unique conversation ID |
| chatbot_id | UUID | FOREIGN KEY, NOT NULL | - | Associated chatbot |
| visitor_id | TEXT | NOT NULL | - | Anonymous visitor hash |
| visitor_ip | TEXT | NULL | - | Hashed IP (privacy) |
| visitor_country | TEXT | NULL | - | Country (from IP) |
| started_at | TIMESTAMP | NOT NULL | NOW() | Conversation start |
| ended_at | TIMESTAMP | NULL | - | Conversation end |
| message_count | INTEGER | NOT NULL | 0 | Total messages |
| rating | INTEGER | NULL | - | Customer rating (1-5) |

**Foreign Keys:**
```sql
FOREIGN KEY (chatbot_id) REFERENCES chatbots(id) ON DELETE CASCADE
```

**Indexes:**
```sql
CREATE INDEX idx_conversations_chatbot ON conversations(chatbot_id);
CREATE INDEX idx_conversations_started ON conversations(started_at DESC);
CREATE INDEX idx_conversations_visitor ON conversations(visitor_id);
```

**Visitor ID Generation:**
```typescript
// Anonymous visitor identification (no PII)
const generateVisitorId = (userAgent: string, ip: string) => {
  const hash = crypto.createHash('sha256');
  hash.update(userAgent + ip + Date.now().toString());
  return 'visitor_' + hash.digest('hex').substring(0, 16);
};
```

---

### **Table: messages**

**Purpose:** Stores individual chat messages in conversations

| Column | Type | Constraints | Default | Description |
|--------|------|-------------|---------|-------------|
| id | UUID | PRIMARY KEY | gen_random_uuid() | Unique message ID |
| conversation_id | UUID | FOREIGN KEY, NOT NULL | - | Parent conversation |
| role | TEXT | NOT NULL | - | 'user' or 'assistant' |
| content | TEXT | NOT NULL | - | Message text |
| tokens_used | INTEGER | NULL | - | AI tokens consumed |
| response_time_ms | INTEGER | NULL | - | AI response time |
| created_at | TIMESTAMP | NOT NULL | NOW() | Message timestamp |

**Foreign Keys:**
```sql
FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
```

**Indexes:**
```sql
CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_created ON messages(created_at DESC);
CREATE INDEX idx_messages_role ON messages(role);
```

**Constraints:**
```sql
ALTER TABLE messages 
  ADD CONSTRAINT check_role 
  CHECK (role IN ('user', 'assistant'));

ALTER TABLE messages 
  ADD CONSTRAINT check_content_length 
  CHECK (char_length(content) <= 10000);
```

---

## 5.3 Database Relationships Summary
```
customers (1) ──→ (N) chatbots
                      ↓
           chatbots (1) ──→ (N) conversations
                                  ↓
                   conversations (1) ──→ (N) messages
```

**Cascade Delete Rules:**
- Delete customer → Deletes all chatbots → Deletes all conversations → Deletes all messages
- Delete chatbot → Deletes all conversations → Deletes all messages
- Delete conversation → Deletes all messages

---

## 5.4 Sample Data

### **Sample Customer:**
```sql
INSERT INTO customers (email, password_hash, company_name, subscription_tier)
VALUES (
  'john@example.com',
  '$2a$10$...',  -- bcrypt hash
  'Example Corp',
  'pro'
);
```

### **Sample Chatbot:**
```sql
INSERT INTO chatbots (
  customer_id,
  name,
  website_url,
  widget_color,
  welcome_message,
  api_key
) VALUES (
  'uuid-of-customer',
  'Support Bot',
  'https://example.com',
  '#3B82F6',
  'Hi! How can I help you today?',
  'axb_1a2b3c4d5e6f7g8h9i0j...'
);
```

### **Sample Conversation:**
```sql
INSERT INTO conversations (chatbot_id, visitor_id, visitor_country)
VALUES (
  'uuid-of-chatbot',
  'visitor_abc123def456',
  'US'
);
```

### **Sample Messages:**
```sql
-- User message
INSERT INTO messages (conversation_id, role, content)
VALUES (
  'uuid-of-conversation',
  'user',
  'What are your business hours?'
);

-- Assistant response
INSERT INTO messages (
  conversation_id,
  role,
  content,
  tokens_used,
  response_time_ms
) VALUES (
  'uuid-of-conversation',
  'assistant',
  'We are open Monday-Friday, 9am-5pm EST.',
  45,
  1250
);
```

---

## 5.5 Database Migrations Strategy

**Migration Tool:** Supabase Migrations (SQL files)

**Migration Naming:**
```
YYYYMMDDHHMMSS_description.sql

Example:
20250107120000_create_customers_table.sql
20250107120100_create_chatbots_table.sql
20250107120200_create_conversations_table.sql
20250107120300_create_messages_table.sql
```

**Migration Workflow:**
```bash
# Create migration
supabase migration new add_feature

# Apply locally
supabase db reset

# Push to production
supabase db push
```

---

# 6. Development Phases

## 6.1 Phase Overview

| Phase | Name | Duration | Status | Priority |
|-------|------|----------|--------|----------|
| 1 | Project Setup | 1 day | ✅ Complete | Critical |
| 2 | Authentication | 1-2 hours | 🚧 Current | Critical |
| 3 | Chatbot Management | 2-3 hours | 📋 Planned | Critical |
| 4 | Dashboard Frontend | 4-6 hours | 📋 Planned | High |
| 5 | Chat Widget | 3-4 hours | 📋 Planned | Critical |
| 6 | WordPress Plugin | 4-6 hours | 📋 Planned | High |
| 7 | Analytics | 2-3 hours | 📋 Planned | Medium |
| 8 | Testing & QA | 3-4 hours | 📋 Planned | Critical |
| 9 | Deployment | 1-2 hours | 📋 Planned | Critical |

**Total Estimated Time:** 21-31 hours (3-4 days of focused work)

---

## 6.2 Phase 1: Project Setup ✅ COMPLETE

### **Objectives:**
- Initialize project structure
- Set up development environment
- Configure database
- Establish Git workflow

### **Completed Tasks:**

#### **1.1 Project Initialization**
```bash
✅ Create Next.js 16 project with TypeScript
✅ Install dependencies (@supabase, @google/generative-ai)
✅ Configure Tailwind CSS
✅ Set up ESLint and TypeScript
```

#### **1.2 Git Workflow Setup**
```bash
✅ Initialize Git repository
✅ Create branch structure (main → develop → feature)
✅ Configure commitlint (50 char limit, sentence case)
✅ Set up Husky pre-commit hooks
✅ Add validation scripts (type-check, lint)
```

**Commit Standards:**
```
type: Short description (max 50 chars)

Longer explanation if needed.
Can be multiple lines.
```

**Branch Strategy:**
```
main (production code, protected)
  ↓
develop (integration branch, protected)
  ↓
feature/feature-name (development branches)
```

#### **1.3 Database Setup**
```sql
✅ Create Supabase project
✅ Design database schema
✅ Create tables:
   - customers
   - chatbots
   - conversations
   - messages
✅ Add indexes for performance
✅ Set up foreign key relationships
```

#### **1.4 Environment Configuration**
```bash
✅ Create .env.local with keys:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - GEMINI_API_KEY
✅ Create .env.local.example template
✅ Add .env* to .gitignore
```

#### **1.5 API Foundation**
```bash
✅ Create /api/chat endpoint
✅ Integrate Google Gemini AI
✅ Connect Supabase for data storage
✅ Test chat functionality
```

### **Deliverables:**
- ✅ Working Next.js project
- ✅ Database schema created
- ✅ Basic chat API endpoint
- ✅ Git workflow established
- ✅ Clean project structure

### **Git History:**
```
main
 └─ chore: Initialize Next.js project
 └─ chore: Add project structure and config
 └─ feat: Add API and database configuration
 └─ fix: Add missing code to empty files
 └─ chore: Add validation scripts to pre-commit
```

---

## 6.3 Phase 2: Authentication System 🚧 CURRENT

### **Branch:** `feature/authentication`

### **Objectives:**
- Enable customer signup/login
- Implement Supabase Auth
- Create protected API routes
- Add authentication middleware

### **Tasks Breakdown:**

#### **2.1 Supabase Auth Setup** (15 mins)
```bash
[ ] Enable email auth in Supabase dashboard
[ ] Configure email templates
[ ] Set JWT expiry (24 hours)
[ ] Test auth flow manually
```

#### **2.2 Signup API** (30 mins)
**File:** `src/app/api/auth/signup/route.ts`

**Functionality:**
- Validate email format
- Check password strength (min 8 chars)
- Create Supabase auth user
- Create customer record in database
- Return session token

**Request:**
```json
POST /api/auth/signup
{
  "email": "user@example.com",
  "password": "secure123",
  "company_name": "Acme Inc"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  },
  "session": {
    "access_token": "jwt...",
    "refresh_token": "..."
  }
}
```

#### **2.3 Login API** (20 mins)
**File:** `src/app/api/auth/login/route.ts`

**Functionality:**
- Validate credentials
- Create session
- Return tokens

**Request:**
```json
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "secure123"
}
```

#### **2.4 Profile API** (15 mins)
**File:** `src/app/api/auth/profile/route.ts`

**Functionality:**
- Get authenticated user
- Return customer data
- Include subscription info

**Request:**
```
GET /api/auth/profile
Authorization: Bearer <token>
```

#### **2.5 Logout API** (10 mins)
**File:** `src/app/api/auth/logout/route.ts`

**Functionality:**
- Invalidate session
- Clear cookies

#### **2.6 Auth Middleware** (20 mins)
**File:** `src/middleware.ts`

**Functionality:**
- Verify JWT tokens
- Protect API routes
- Handle token refresh

#### **2.7 Testing** (20 mins)
```bash
[ ] Test signup with valid data
[ ] Test signup with duplicate email
[ ] Test login with correct credentials
[ ] Test login with wrong password
[ ] Test protected route without token
[ ] Test protected route with valid token
[ ] Test token expiry
```

### **Acceptance Criteria:**
- [ ] Customer can sign up with email/password
- [ ] Duplicate emails are rejected
- [ ] Customer can login and receive JWT
- [ ] JWT expires after 24 hours
- [ ] Protected routes require authentication
- [ ] Customer can view their profile
- [ ] Customer can logout

### **Commit Pattern:**
```bash
git commit -m "feat: Add signup endpoint"
git commit -m "feat: Add login endpoint"
git commit -m "feat: Add profile endpoint"
git commit -m "feat: Add logout endpoint"
git commit -m "feat: Add auth middleware"
git commit -m "test: Add auth endpoint tests"
```

### **Estimated Time:** 2 hours

---

## 6.4 Phase 3: Chatbot Management APIs 📋 PLANNED

### **Branch:** `feature/chatbot-management`

### **Objectives:**
- CRUD operations for chatbots
- API key generation
- Authorization checks

### **Tasks Breakdown:**

#### **3.1 Create Chatbot** (45 mins)
**File:** `src/app/api/chatbots/route.ts`

**Functionality:**
- Validate input (name, website_url, etc.)
- Generate unique API key
- Insert into database
- Return chatbot data with API key

**Request:**
```json
POST /api/chatbots
Authorization: Bearer <token>
{
  "name": "Support Bot",
  "website_url": "https://example.com",
  "widget_color": "#3B82F6",
  "welcome_message": "Hi! How can I help?"
}
```

**Business Logic:**
- Check subscription limits (free = 1 bot, pro = 3, etc.)
- Generate format: `axb_` + 32 random chars
- Hash API key before storing

#### **3.2 List Chatbots** (30 mins)
**File:** `src/app/api/chatbots/route.ts` (GET)

**Functionality:**
- Get all chatbots for authenticated customer
- Include conversation count
- Sort by created_at DESC

**Request:**
```
GET /api/chatbots
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "chatbots": [
    {
      "id": "uuid",
      "name": "Support Bot",
      "website_url": "https://example.com",
      "api_key": "axb_...",
      "is_active": true,
      "conversation_count": 150,
      "created_at": "2025-01-01T00:00:00Z"
    }
  ],
  "count": 1
}
```

#### **3.3 Get Single Chatbot** (20 mins)
**File:** `src/app/api/chatbots/[id]/route.ts` (GET)

**Functionality:**
- Get chatbot details by ID
- Check authorization (customer owns chatbot)
- Include statistics

**Request:**
```
GET /api/chatbots/[id]
Authorization: Bearer <token>
```

#### **3.4 Update Chatbot** (30 mins)
**File:** `src/app/api/chatbots/[id]/route.ts` (PUT)

**Functionality:**
- Update chatbot settings
- Validate new values
- Check authorization

**Request:**
```json
PUT /api/chatbots/[id]
Authorization: Bearer <token>
{
  "name": "New Name",
  "widget_color": "#10B981"
}
```

**Updatable Fields:**
- name
- website_url
- widget_color
- welcome_message
- ai_model (if subscription allows)
- is_active

#### **3.5 Delete Chatbot** (20 mins)
**File:** `src/app/api/chatbots/[id]/route.ts` (DELETE)

**Functionality:**
- Soft delete (set is_active = false)
- Or hard delete (CASCADE removes conversations/messages)
- Check authorization

**Request:**
```
DELETE /api/chatbots/[id]
Authorization: Bearer <token>
```

#### **3.6 Regenerate API Key** (15 mins)
**File:** `src/app/api/chatbots/[id]/regenerate-key/route.ts`

**Functionality:**
- Generate new API key
- Invalidate old key
- Return new key (only once)

#### **3.7 Testing** (30 mins)
```bash
[ ] Test create chatbot (valid data)
[ ] Test create exceeding subscription limit
[ ] Test list chatbots (returns only own)
[ ] Test get chatbot (authorized)
[ ] Test get chatbot (unauthorized - different customer)
[ ] Test update chatbot
[ ] Test delete chatbot
[ ] Test API key is unique
[ ] Test cascading delete
```

### **Acceptance Criteria:**
- [ ] Customer can create chatbot
- [ ] Subscription limits enforced
- [ ] Customer sees only their chatbots
- [ ] Customer can update chatbot settings
- [ ] Customer can delete chatbot
- [ ] API keys are unique and secure
- [ ] Authorization prevents cross-customer access

### **Commit Pattern:**
```bash
git commit -m "feat: Add create chatbot endpoint"
git commit -m "feat: Add list chatbots endpoint"
git commit -m "feat: Add get chatbot endpoint"
git commit -m "feat: Add update chatbot endpoint"
git commit -m "feat: Add delete chatbot endpoint"
git commit -m "feat: Add API key generation utility"
git commit -m "test: Add chatbot CRUD tests"
```

### **Estimated Time:** 3 hours

---

## 6.5 Phase 4: Dashboard Frontend 📋 PLANNED

### **Branch:** `feature/dashboard-frontend`

### **Objectives:**
- Build customer-facing dashboard
- Chatbot management UI
- Analytics visualization

### **Pages to Build:**

#### **4.1 Login Page** (45 mins)
**Route:** `/login`

**Components:**
- Login form
- Validation
- Error handling
- "Forgot password" link

#### **4.2 Signup Page** (45 mins)
**Route:** `/signup`

**Components:**
- Signup form
- Email validation
- Password strength meter
- Terms acceptance checkbox

#### **4.3 Dashboard Home** (1 hour)
**Route:** `/dashboard`

**Components:**
- Welcome message
- Quick stats cards:
  - Total chatbots
  - Total conversations (24h)
  - Total messages (24h)
- Recent conversations list
- Quick actions (Create chatbot, View analytics)

#### **4.4 Chatbots List Page** (1 hour)
**Route:** `/dashboard/chatbots`

**Components:**
- Chatbots table
  - Name
  - Website URL
  - Status (active/inactive)
  - Conversations count
  - Actions (Edit, Delete, View stats)
- "Create New Chatbot" button
- Search/filter

#### **4.5 Create/Edit Chatbot** (1.5 hours)
**Route:** `/dashboard/chatbots/new` or `/dashboard/chatbots/[id]/edit`

**Form Fields:**
- Name (text input)
- Website URL (URL input)
- Widget color (color picker)
- Welcome message (textarea)
- AI model (dropdown - based on subscription)

**Features:**
- Live preview of widget
- Validation
- Save/Cancel buttons

#### **4.6 Chatbot Detail Page** (1 hour)
**Route:** `/dashboard/chatbots/[id]`

**Sections:**
- Chatbot info
- API key (with copy button)
- Installation instructions
- Recent conversations
- Stats widget

#### **4.7 Analytics Page** (1 hour)
**Route:** `/dashboard/analytics/[chatbotId]`

**Components:**
- Date range picker
- Key metrics cards
- Conversations chart (line graph)
- Messages per day chart
- Top conversations table

### **UI/UX Requirements:**
- Responsive design (mobile, tablet, desktop)
- Tailwind CSS styling
- Loading states
- Error states
- Success toasts
- Confirm dialogs for destructive actions

### **Acceptance Criteria:**
- [ ] Clean, modern UI
- [ ] Mobile responsive
- [ ] Fast page loads (<1s)
- [ ] Intuitive navigation
- [ ] Proper error handling
- [ ] Loading indicators
- [ ] Form validation

### **Commit Pattern:**
```bash
git commit -m "feat: Add login page"
git commit -m "feat: Add signup page"
git commit -m "feat: Add dashboard home page"
git commit -m "feat: Add chatbots list page"
git commit -m "feat: Add create chatbot form"
git commit -m "feat: Add edit chatbot form"
git commit -m "feat: Add chatbot detail page"
git commit -m "feat: Add analytics page"
git commit -m "style: Improve dashboard responsiveness"
```

### **Estimated Time:** 6 hours

---

## 6.5 Phase 5: Chat Widget 📋 PLANNED

### **Branch:** `feature/chat-widget`

### **Objectives:**
- Build embeddable chat widget
- Real-time messaging UI
- Works on any website

### **Widget Components:**

#### **5.1 Widget Launcher** (30 mins)
**Functionality:**
- Floating button (bottom-right corner)
- Customizable color (from chatbot settings)
- Badge for unread messages
- Open/close animation

#### **5.2 Chat Window** (1 hour)
**Functionality:**
- Header (bot name, minimize/close buttons)
- Message list (scrollable)
- Message bubbles (user vs assistant)
- Typing indicator
- Input field
- Send button

#### **5.3 Message Handling** (45 mins)
**Functionality:**
- Send user message
- Call /api/chat endpoint
- Display AI response
- Handle errors
- Retry failed messages

#### **5.4 Widget SDK** (1 hour)
**File:** `public/widget.js`

**Initialization:**
```javascript
<script src="https://axilobot.com/widget.js"></script>
<script>
  AxilobotWidget.init({
    apiKey: 'axb_...',
    position: 'bottom-right',
    color: '#3B82F6'
  });
</script>
```

**Features:**
- Auto-initialization
- Lazy loading
- No jQuery dependency
- <20KB gzipped

#### **5.5 Customization Options** (30 mins)
```javascript
AxilobotWidget.init({
  apiKey: 'axb_...',
  position: 'bottom-right | bottom-left',
  color: '#hex',
  welcomeMessage: 'Custom greeting',
  placeholder: 'Type your message...',
  buttonText: 'Chat with us',
  theme: 'light | dark'
});
```

#### **5.6 Mobile Optimization** (30 mins)
- Fullscreen on mobile
- Touch-friendly buttons
- Virtual keyboard handling

### **Technical Requirements:**
- Vanilla JavaScript (no React in widget)
- Shadow DOM (CSS isolation)
- Cross-origin compatible
- Accessibility (ARIA labels, keyboard nav)
- GDPR cookie consent

### **Acceptance Criteria:**
- [ ] Widget loads on any website
- [ ] Customizable appearance
- [ ] Real-time messaging works
- [ ] Mobile responsive
- [ ] No conflicts with host site CSS/JS
- [ ] Lightweight (<20KB)
- [ ] Accessible (WCAG 2.1 AA)

### **Commit Pattern:**
```bash
git commit -m "feat: Add widget launcher component"
git commit -m "feat: Add chat window component"
git commit -m "feat: Add message handling logic"
git commit -m "feat: Create widget SDK"
git commit -m "feat: Add customization options"
git commit -m "feat: Optimize widget for mobile"
git commit -m "fix: Widget CSS isolation"
```

### **Estimated Time:** 4 hours

---

## 6.6 Phase 6: WordPress Plugin 📋 PLANNED

### **Branch:** `feature/wordpress-plugin`

### **Objectives:**
- WordPress plugin for easy installation
- Settings page in WP admin
- Seamless integration

### **Plugin Structure:**
```
axilobot-wordpress/
├── axilobot.php (main file)
├── admin/
│   ├── settings.php
│   └── assets/
├── public/
│   └── widget-loader.php
├── includes/
│   ├── class-axilobot.php
│   └── class-api.php
├── languages/
└── readme.txt
```

### **Development Tasks:**

#### **6.1 Plugin Main File** (30 mins)
**File:** `axilobot.php`
```php
/**
 * Plugin Name: Axilobot
 * Description: AI-powered customer service chatbot
 * Version: 1.0.0
 * Author: Axilobot
 * Text Domain: axilobot
 */
```

**Functionality:**
- Plugin activation/deactivation hooks
- Load settings
- Enqueue widget script

#### **6.2 Admin Settings Page** (1 hour)
**File:** `admin/settings.php`

**Settings:**
- API Key (text input)
- Widget Position (dropdown)
- Widget Color (color picker)
- Welcome Message (textarea)
- Enable/Disable toggle

**Save to:** WordPress options table

#### **6.3 Widget Integration** (45 mins)
**File:** `public/widget-loader.php`

**Functionality:**
- Load widget.js from Axilobot CDN
- Initialize with saved settings
- Only load on frontend (not admin)

#### **6.4 API Connection** (30 mins)
**File:** `includes/class-api.php`

**Functionality:**
- Verify API key
- Fetch chatbot settings from Axilobot API
- Cache settings (1 hour)

#### **6.5 Plugin Submission** (1 hour)
**Requirements:**
- readme.txt (WordPress format)
- Screenshots (4-6 images)
- Icon (256x256, 128x128)
- Banner (1544x500, 772x250)
- GPL license
- Security review compliance

### **WordPress Plugin Directory:**
```
Plugin Name: Axilobot - AI Customer Service Chatbot
Tags: chatbot, ai, customer service, live chat, support
Requires at least: 5.8
Tested up to: 6.7
Stable tag: 1.0.0
License: GPLv2 or later
```

### **Acceptance Criteria:**
- [ ] Plugin installs via WordPress admin
- [ ] Easy settings configuration
- [ ] Widget appears on frontend
- [ ] Doesn't conflict with other plugins
- [ ] Passes WordPress.org review
- [ ] Well documented
- [ ] Translation ready

### **Commit Pattern:**
```bash
git commit -m "feat: Create WordPress plugin structure"
git commit -m "feat: Add admin settings page"
git commit -m "feat: Add widget integration"
git commit -m "feat: Add API connection class"
git commit -m "docs: Add plugin documentation"
git commit -m "chore: Prepare plugin for submission"
```

### **Estimated Time:** 4 hours

---

## 6.7 Phase 7: Analytics APIs 📋 PLANNED

### **Branch:** `feature/analytics`

### **Objectives:**
- Track conversation metrics
- Provide insights to customers
- Performance analytics

### **APIs to Build:**

#### **7.1 Chatbot Statistics** (45 mins)
**File:** `src/app/api/analytics/[chatbotId]/route.ts`

**Metrics:**
- Total conversations
- Total messages
- Average messages per conversation
- Average response time
- Conversations by date (last 30 days)

**Request:**
```
GET /api/analytics/[chatbotId]?start_date=2025-01-01&end_date=2025-01-31
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "analytics": {
    "total_conversations": 150,
    "total_messages": 450,
    "avg_messages_per_conversation": 3,
    "avg_response_time_ms": 1200,
    "conversations_by_date": [
      { "date": "2025-01-01", "count": 5 },
      { "date": "2025-01-02", "count": 8 }
    ]
  }
}
```

#### **7.2 Conversation List** (30 mins)
**File:** `src/app/api/conversations/[chatbotId]/route.ts`

**Functionality:**
- List all conversations for chatbot
- Pagination (20 per page)
- Sort by started_at DESC
- Filter by date range

**Request:**
```
GET /api/conversations/[chatbotId]?page=1&limit=20
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "conversations": [
    {
      "id": "uuid",
      "visitor_id": "visitor_abc",
      "started_at": "2025-01-15T10:00:00Z",
      "message_count": 5,
      "rating": 4
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

#### **7.3 Conversation Details** (20 mins)
**File:** `src/app/api/conversations/[id]/messages/route.ts`

**Functionality:**
- Get all messages in conversation
- Include timestamps
- Show tokens used

**Request:**
```
GET /api/conversations/[id]/messages
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "conversation": {
    "id": "uuid",
    "started_at": "2025-01-15T10:00:00Z",
    "ended_at": "2025-01-15T10:15:00Z"
  },
  "messages": [
    {
      "id": "uuid",
      "role": "user",
      "content": "What are your hours?",
      "created_at": "2025-01-15T10:00:00Z"
    },
    {
      "id": "uuid",
      "role": "assistant",
      "content": "We're open 9am-5pm EST.",
      "tokens_used": 25,
      "response_time_ms": 1100,
      "created_at": "2025-01-15T10:00:02Z"
    }
  ]
}
```

#### **7.4 Performance Metrics** (30 mins)
**File:** `src/app/api/analytics/[chatbotId]/performance/route.ts`

**Metrics:**
- Average response time
- Token usage (by date)
- Peak hours
- Geographic distribution

#### **7.5 Export Data** (20 mins)
**File:** `src/app/api/conversations/[chatbotId]/export/route.ts`

**Functionality:**
- Export conversations as CSV
- Date range filter
- Include all message data

### **Database Queries Optimization:**
```sql
-- Add indexes for analytics queries
CREATE INDEX idx_messages_created_date ON messages(DATE(created_at));
CREATE INDEX idx_conversations_started_date ON conversations(DATE(started_at));
CREATE INDEX idx_conversations_chatbot_started ON conversations(chatbot_id, started_at DESC);
```

### **Acceptance Criteria:**
- [ ] Get conversation count by date range
- [ ] Calculate average response time
- [ ] List conversations with pagination
- [ ] View full conversation history
- [ ] Export data as CSV
- [ ] Queries are optimized (<500ms)

### **Commit Pattern:**
```bash
git commit -m "feat: Add chatbot statistics endpoint"
git commit -m "feat: Add conversation list endpoint"
git commit -m "feat: Add conversation details endpoint"
git commit -m "feat: Add performance metrics"
git commit -m "feat: Add data export functionality"
git commit -m "perf: Optimize analytics queries"
```

### **Estimated Time:** 3 hours

---

## 6.8 Phase 8: Testing & QA 📋 PLANNED

### **Branch:** `feature/testing`

### **Objectives:**
- Comprehensive testing
- Bug fixes
- Performance optimization

### **Testing Strategy:**

#### **8.1 Unit Tests** (2 hours)
**Tool:** Jest + React Testing Library

**Test Files:**
```
tests/
├── unit/
│   ├── auth.test.ts
│   ├── chatbots.test.ts
│   ├── chat.test.ts
│   └── analytics.test.ts
```

**Coverage Goals:**
- API routes: 80%+
- Utilities: 90%+
- Components: 70%+

#### **8.2 Integration Tests** (1 hour)
**Scenarios:**
- Complete user journey (signup → create bot → chat → analytics)
- Error handling flows
- Edge cases

#### **8.3 Manual Testing Checklist** (1 hour)
```bash
Authentication:
[ ] Sign up with valid email
[ ] Sign up with duplicate email (error)
[ ] Login with correct credentials
[ ] Login with wrong password (error)
[ ] Access protected route without token (redirect)
[ ] Token expiry (re-login)

Chatbot Management:
[ ] Create chatbot (within limits)
[ ] Create chatbot (exceed limit - error)
[ ] List chatbots (only own)
[ ] Update chatbot
[ ] Delete chatbot
[ ] API key is unique

Chat Functionality:
[ ] Send message (get AI response)
[ ] Multiple messages (context maintained)
[ ] Invalid chatbot ID (error)
[ ] Missing fields (error)

Widget:
[ ] Widget loads on test page
[ ] Widget customization works
[ ] Messages send/receive
[ ] Mobile responsive
[ ] No CSS conflicts

WordPress Plugin:
[ ] Plugin installs
[ ] Settings save
[ ] Widget appears on frontend
[ ] API key validation

Analytics:
[ ] View statistics
[ ] Date range filter
[ ] Conversation list
[ ] Export CSV
```

#### **8.4 Performance Testing** (30 mins)
**Metrics:**
- Page load time: <1s
- API response time: <500ms
- Chat response time: <2s
- Widget load time: <300ms

**Tools:**
- Lighthouse (PWA audit)
- WebPageTest
- Supabase query analyzer

#### **8.5 Security Testing** (30 mins)
```bash
[ ] SQL injection attempts
[ ] XSS attempts
[ ] CSRF protection
[ ] Rate limiting
[ ] Authentication bypass attempts
[ ] Unauthorized resource access
```

#### **8.6 Browser Testing** (30 mins)
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### **Bug Tracking:**
**Priority System:**
- P0 (Critical): Blocks launch
- P1 (High): Major feature broken
- P2 (Medium): Minor feature broken
- P3 (Low): UI polish

### **Acceptance Criteria:**
- [ ] All critical bugs fixed (P0)
- [ ] 80%+ test coverage
- [ ] Performance benchmarks met
- [ ] Security review passed
- [ ] Cross-browser compatible

### **Commit Pattern:**
```bash
git commit -m "test: Add auth unit tests"
git commit -m "test: Add chatbot CRUD tests"
git commit -m "test: Add integration tests"
git commit -m "fix: Handle duplicate email error"
git commit -m "fix: Widget CSS conflicts"
git commit -m "perf: Optimize database queries"
git commit -m "security: Add rate limiting"
```

### **Estimated Time:** 4 hours

---

## 6.9 Phase 9: Deployment 📋 PLANNED

### **Branch:** `release/v1.0.0`

### **Objectives:**
- Deploy to production
- Configure domains
- Set up monitoring

### **Deployment Tasks:**

#### **9.1 Pre-Deployment Checklist** (30 mins)
```bash
[ ] All tests passing
[ ] Environment variables documented
[ ] Database migrations ready
[ ] API documentation complete
[ ] Error logging configured
[ ] Analytics setup (Google Analytics, PostHog)
```

#### **9.2 Production Environment Setup** (30 mins)

**Vercel:**
```bash
# Connect GitHub repo
# Configure environment variables
# Set up production domain (axilobot.com)
# Enable automatic deployments from main branch
```

**Supabase:**
```bash
# Create production project
# Run migrations
# Configure RLS policies
# Set up database backups (daily)
```

**Domain Configuration:**
```
axilobot.com → Vercel (main site)
api.axilobot.com → Vercel API routes
cdn.axilobot.com → Widget static files
```

#### **9.3 Deploy Main Application** (20 mins)
```bash
# Merge develop → main
git checkout main
git merge develop

# Tag release
git tag -a v1.0.0 -m "First production release"

# Push to GitHub (triggers Vercel deploy)
git push origin main --tags
```

**Vercel auto-deploys on push to main**

#### **9.4 WordPress Plugin Submission** (1 hour)
```bash
# Prepare plugin package
zip -r axilobot-wordpress-v1.0.0.zip axilobot-wordpress/

# Submit to WordPress.org
# Wait for review (3-7 days)
```

#### **9.5 CDN Setup** (20 mins)
```bash
# Upload widget.js to Vercel
# Configure caching headers (1 year)
# Set up CDN URL: https://cdn.axilobot.com/widget.js
```

#### **9.6 Monitoring & Logging** (30 mins)

**Error Tracking:**
- Sentry (free tier: 5K errors/month)

**Analytics:**
- PostHog (free tier: 1M events/month)

**Uptime Monitoring:**
- UptimeRobot (free: 50 monitors, 5-min intervals)

**Alerts:**
- Email alerts for:
  - API errors (>10 in 5 mins)
  - High response time (>2s average)
  - Database connection failures
  - Site downtime

#### **9.7 Post-Deployment Testing** (20 mins)
```bash
Production Smoke Tests:
[ ] Homepage loads
[ ] Signup works
[ ] Login works
[ ] Create chatbot works
[ ] Chat API works
[ ] Widget loads on test site
[ ] WordPress plugin connects
[ ] Analytics displays data
```

### **Rollback Plan:**
```bash
# If critical issue found
git revert <commit-hash>
git push origin main

# Vercel deploys previous version
# Time to rollback: ~2 minutes
```

### **Acceptance Criteria:**
- [ ] Application deployed to production
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Monitoring active
- [ ] Error tracking setup
- [ ] All smoke tests passed

### **Commit Pattern:**
```bash
git commit -m "chore: Configure production environment"
git commit -m "chore: Add error tracking"
git commit -m "chore: Set up monitoring"
git commit -m "docs: Add deployment guide"
git commit -m "release: Version 1.0.0"
```

### **Estimated Time:** 2 hours

---

# 7. API Reference

## 7.1 API Overview

**Base URLs:**
```
Development: http://localhost:3000
Production:  https://axilobot.com
```

**Authentication:**
Most endpoints require Bearer token authentication:
```
Authorization: Bearer <access_token>
```

**Rate Limiting:**
- Public endpoints (chat): 100 requests/hour per IP
- Authenticated endpoints: 1000 requests/hour per user
- API key endpoints (widget): 10,000 requests/hour per key

**Response Format:**
All responses are JSON:
```json
{
  "success": true|false,
  "data": {},
  "error": "Error message" // only if success = false
}
```

---

## 7.2 Authentication Endpoints

### **POST /api/auth/signup**
Create new customer account.

**Request Body:**
```json
{
  "email": "customer@example.com",
  "password": "securePassword123",
  "company_name": "Acme Inc"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "customer@example.com",
    "company_name": "Acme Inc",
    "subscription_tier": "free"
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "refresh_token_here",
    "expires_at": "2025-01-16T10:00:00Z"
  }
}
```

**Error Responses:**
```json
// 400 - Missing fields
{
  "success": false,
  "error": "Email and password are required"
}

// 400 - Invalid email
{
  "success": false,
  "error": "Invalid email format"
}

// 400 - Weak password
{
  "success": false,
  "error": "Password must be at least 8 characters"
}

// 409 - Duplicate email
{
  "success": false,
  "error": "Email already registered"
}
```

---

### **POST /api/auth/login**
Authenticate existing customer.

**Request Body:**
```json
{
  "email": "customer@example.com",
  "password": "securePassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "customer@example.com",
    "company_name": "Acme Inc",
    "subscription_tier": "pro"
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "refresh_token_here",
    "expires_at": "2025-01-16T10:00:00Z"
  }
}
```

**Error Responses:**
```json
// 400 - Missing fields
{
  "success": false,
  "error": "Email and password are required"
}

// 401 - Invalid credentials
{
  "success": false,
  "error": "Invalid email or password"
}
```

---

### **GET /api/auth/profile**
Get authenticated customer profile.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Success Response (200):**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "customer@example.com",
    "company_name": "Acme Inc",
    "subscription_tier": "pro",
    "subscription_ends": "2025-02-15T00:00:00Z",
    "created_at": "2025-01-01T00:00:00Z",
    "chatbot_count": 3,
    "chatbot_limit": 3
  }
}
```

**Error Responses:**
```json
// 401 - No token
{
  "success": false,
  "error": "Authentication required"
}

// 401 - Invalid token
{
  "success": false,
  "error": "Invalid or expired token"
}
```

---

### **POST /api/auth/logout**
End customer session.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 7.3 Chatbot Management Endpoints

### **POST /api/chatbots**
Create new chatbot.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Request Body:**
```json
{
  "name": "Support Bot",
  "website_url": "https://example.com",
  "widget_color": "#3B82F6",
  "welcome_message": "Hi! How can I help you today?",
  "ai_model": "gemini"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "chatbot": {
    "id": "uuid",
    "customer_id": "uuid",
    "name": "Support Bot",
    "website_url": "https://example.com",
    "widget_color": "#3B82F6",
    "welcome_message": "Hi! How can I help you today?",
    "ai_model": "gemini",
    "api_key": "axb_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
    "is_active": true,
    "created_at": "2025-01-15T10:00:00Z"
  }
}
```

**Error Responses:**
```json
// 400 - Missing required fields
{
  "success": false,
  "error": "Name is required"
}

// 403 - Subscription limit reached
{
  "success": false,
  "error": "Chatbot limit reached for your plan. Upgrade to create more."
}

// 400 - Invalid AI model for tier
{
  "success": false,
  "error": "Claude AI is only available on Business tier and above"
}
```

---

### **GET /api/chatbots**
List all chatbots for authenticated customer.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Success Response (200):**
```json
{
  "success": true,
  "chatbots": [
    {
      "id": "uuid-1",
      "name": "Support Bot",
      "website_url": "https://example.com",
      "widget_color": "#3B82F6",
      "ai_model": "gemini",
      "api_key": "axb_1a2b3c4d...",
      "is_active": true,
      "conversation_count": 150,
      "message_count": 450,
      "created_at": "2025-01-01T00:00:00Z"
    },
    {
      "id": "uuid-2",
      "name": "Sales Bot",
      "website_url": "https://shop.example.com",
      "widget_color": "#10B981",
      "ai_model": "claude",
      "api_key": "axb_9z8y7x6w...",
      "is_active": true,
      "conversation_count": 89,
      "message_count": 267,
      "created_at": "2025-01-10T00:00:00Z"
    }
  ],
  "count": 2,
  "limit": 3
}
```

---

### **GET /api/chatbots/[id]**
Get single chatbot details.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Success Response (200):**
```json
{
  "success": true,
  "chatbot": {
    "id": "uuid",
    "customer_id": "uuid",
    "name": "Support Bot",
    "website_url": "https://example.com",
    "widget_color": "#3B82F6",
    "welcome_message": "Hi! How can I help you today?",
    "ai_model": "gemini",
    "api_key": "axb_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
    "is_active": true,
    "created_at": "2025-01-15T10:00:00Z",
    "updated_at": "2025-01-15T10:00:00Z",
    "stats": {
      "total_conversations": 150,
      "total_messages": 450,
      "avg_response_time_ms": 1200,
      "conversations_today": 12
    }
  }
}
```

**Error Responses:**
```json
// 404 - Not found
{
  "success": false,
  "error": "Chatbot not found"
}

// 403 - Unauthorized
{
  "success": false,
  "error": "You don't have permission to access this chatbot"
}
```

---

### **PUT /api/chatbots/[id]**
Update chatbot settings.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Request Body** (all fields optional):
```json
{
  "name": "Updated Support Bot",
  "website_url": "https://newsite.com",
  "widget_color": "#10B981",
  "welcome_message": "Hello! How may I assist you?",
  "ai_model": "claude",
  "is_active": false
}
```

**Success Response (200):**
```json
{
  "success": true,
  "chatbot": {
    "id": "uuid",
    "name": "Updated Support Bot",
    "website_url": "https://newsite.com",
    "widget_color": "#10B981",
    "welcome_message": "Hello! How may I assist you?",
    "ai_model": "claude",
    "is_active": false,
    "updated_at": "2025-01-15T12:00:00Z"
  }
}
```

**Error Responses:**
```json
// 404 - Not found
{
  "success": false,
  "error": "Chatbot not found"
}

// 403 - Unauthorized
{
  "success": false,
  "error": "You don't have permission to modify this chatbot"
}

// 400 - Invalid AI model for tier
{
  "success": false,
  "error": "Claude AI requires Business tier or above"
}
```

---

### **DELETE /api/chatbots/[id]**
Delete chatbot (and all associated data).

**Headers:**
```
Authorization: Bearer <access_token>
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Chatbot deleted successfully"
}
```

**Error Responses:**
```json
// 404 - Not found
{
  "success": false,
  "error": "Chatbot not found"
}

// 403 - Unauthorized
{
  "success": false,
  "error": "You don't have permission to delete this chatbot"
}
```

---

## 7.4 Chat Endpoint (Public)

### **POST /api/chat**
Send message and receive AI response.

**No authentication required** (uses chatbot API key)

**Request Body:**
```json
{
  "chatbotId": "uuid",
  "message": "Hello, I need help with my order",
  "conversationId": "uuid (optional)",
  "visitorId": "visitor_abc123 (optional)"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "response": "Hello! I'd be happy to help you with your order. Can you please provide your order number?",
  "conversationId": "uuid",
  "messageId": "uuid",
  "tokensUsed": 45,
  "responseTime": 1200
}
```

**Error Responses:**
```json
// 400 - Missing fields
{
  "success": false,
  "error": "Message and chatbotId are required"
}

// 404 - Chatbot not found
{
  "success": false,
  "error": "Chatbot not found or inactive"
}

// 429 - Rate limit
{
  "success": false,
  "error": "Rate limit exceeded. Please try again later."
}

// 500 - AI service error
{
  "success": false,
  "error": "Failed to generate response. Please try again."
}
```

---

## 7.5 Analytics Endpoints

### **GET /api/analytics/[chatbotId]**
Get chatbot statistics.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Query Parameters:**
- `start_date` (optional): ISO date string (default: 30 days ago)
- `end_date` (optional): ISO date string (default: today)

**Example:**
```
GET /api/analytics/uuid-123?start_date=2025-01-01&end_date=2025-01-31
```

**Success Response (200):**
```json
{
  "success": true,
  "analytics": {
    "chatbot_id": "uuid",
    "date_range": {
      "start": "2025-01-01",
      "end": "2025-01-31"
    },
    "metrics": {
      "total_conversations": 150,
      "total_messages": 450,
      "avg_messages_per_conversation": 3,
      "avg_response_time_ms": 1200,
      "total_tokens_used": 12500
    },
    "conversations_by_date": [
      { "date": "2025-01-01", "count": 5 },
      { "date": "2025-01-02", "count": 8 },
      { "date": "2025-01-03", "count": 6 }
      // ... more dates
    ],
    "peak_hours": [
      { "hour": 14, "count": 25 },
      { "hour": 15, "count": 23 },
      { "hour": 10, "count": 20 }
    ],
    "geographic_distribution": [
      { "country": "US", "count": 80 },
      { "country": "UK", "count": 30 },
      { "country": "CA", "count": 20 }
    ]
  }
}
```

---

### **GET /api/conversations/[chatbotId]**
List conversations for a chatbot.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Results per page (default: 20, max: 100)
- `start_date` (optional): Filter by date range
- `end_date` (optional): Filter by date range

**Example:**
```
GET /api/conversations/uuid-123?page=1&limit=20
```

**Success Response (200):**
```json
{
  "success": true,
  "conversations": [
    {
      "id": "uuid-1",
      "visitor_id": "visitor_abc123",
      "visitor_country": "US",
      "started_at": "2025-01-15T10:00:00Z",
      "ended_at": "2025-01-15T10:15:00Z",
      "message_count": 5,
      "rating": 4,
      "duration_seconds": 900
    },
    {
      "id": "uuid-2",
      "visitor_id": "visitor_def456",
      "visitor_country": "UK",
      "started_at": "2025-01-15T09:30:00Z",
      "ended_at": null,
      "message_count": 3,
      "rating": null,
      "duration_seconds": null
    }
    // ... more conversations
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

---

### **GET /api/conversations/[id]/messages**
Get all messages in a conversation.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Success Response (200):**
```json
{
  "success": true,
  "conversation": {
    "id": "uuid",
    "chatbot_id": "uuid",
    "visitor_id": "visitor_abc123",
    "started_at": "2025-01-15T10:00:00Z",
    "ended_at": "2025-01-15T10:15:00Z",
    "message_count": 5
  },
  "messages": [
    {
      "id": "uuid-msg-1",
      "role": "user",
      "content": "Hello, I need help with my order",
      "created_at": "2025-01-15T10:00:00Z"
    },
    {
      "id": "uuid-msg-2",
      "role": "assistant",
      "content": "Hello! I'd be happy to help you with your order. Can you provide your order number?",
      "tokens_used": 45,
      "response_time_ms": 1200,
      "created_at": "2025-01-15T10:00:02Z"
    },
    {
      "id": "uuid-msg-3",
      "role": "user",
      "content": "It's #ORD-12345",
      "created_at": "2025-01-15T10:00:30Z"
    },
    {
      "id": "uuid-msg-4",
      "role": "assistant",
      "content": "Thank you! I found your order #ORD-12345. It was shipped yesterday and should arrive by Friday. Tracking number: TRACK-123456",
      "tokens_used": 62,
      "response_time_ms": 1400,
      "created_at": "2025-01-15T10:00:32Z"
    },
    {
      "id": "uuid-msg-5",
      "role": "user",
      "content": "Perfect, thank you!",
      "created_at": "2025-01-15T10:01:00Z"
    }
  ]
}
```

---

### **GET /api/conversations/[chatbotId]/export**
Export conversations as CSV.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Query Parameters:**
- `start_date` (optional): ISO date string
- `end_date` (optional): ISO date string
- `format` (optional): 'csv' or 'json' (default: csv)

**Success Response (200):**
```csv
conversation_id,visitor_id,started_at,ended_at,message_count,rating
uuid-1,visitor_abc123,2025-01-15T10:00:00Z,2025-01-15T10:15:00Z,5,4
uuid-2,visitor_def456,2025-01-15T09:30:00Z,,3,
...
```

---

## 7.6 Error Codes Reference

| HTTP Status | Code | Description |
|-------------|------|-------------|
| 400 | MISSING_FIELDS | Required fields missing |
| 400 | INVALID_FORMAT | Invalid data format |
| 401 | UNAUTHORIZED | No valid authentication |
| 401 | INVALID_TOKEN | Token expired or invalid |
| 403 | FORBIDDEN | Access denied |
| 404 | NOT_FOUND | Resource not found |
| 409 | DUPLICATE | Resource already exists |
| 429 | RATE_LIMIT | Too many requests |
| 500 | SERVER_ERROR | Internal server error |
| 503 | SERVICE_UNAVAILABLE | Service temporarily down |

---

## 7.7 Rate Limiting

**Rate Limit Headers:**
All API responses include rate limit info:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642368000
```

**Rate Limits by Endpoint:**

| Endpoint Type | Limit | Window |
|--------------|-------|--------|
| Public (chat) | 100 requests | 1 hour |
| Authenticated | 1000 requests | 1 hour |
| Widget API key | 10,000 requests | 1 hour |

**When Rate Limited:**
```json
{
  "success": false,
  "error": "Rate limit exceeded",
  "retry_after": 3600,
  "limit": 1000,
  "window": "1 hour"
}
```

---

# 8. Git Workflow

## 8.1 Branch Strategy

**Git Flow Model:**
```
main (production, protected)
  ↓ merge only via PR
develop (integration, protected)
  ↓ merge feature branches here
feature/* (development branches)
  ↓ work happens here
```

**Branch Types:**

| Type | Naming | Purpose | Base Branch |
|------|--------|---------|-------------|
| main | `main` | Production code | - |
| develop | `develop` | Integration | main |
| feature | `feature/name` | New features | develop |
| fix | `fix/issue-name` | Bug fixes | develop |
| hotfix | `hotfix/critical-fix` | Urgent production fixes | main |
| release | `release/v1.0.0` | Release preparation | develop |

---

## 8.2 Commit Standards

**Conventional Commits Format:**
```
type: Short description (max 50 chars)

Optional longer explanation.
Can be multiple lines.
Include context and reasoning.
```

**Commit Types:**

| Type | Usage | Example |
|------|-------|---------|
| `feat` | New feature | feat: Add signup endpoint |
| `fix` | Bug fix | fix: Handle null conversation ID |
| `docs` | Documentation | docs: Add API reference |
| `style` | Code formatting | style: Format chat component |
| `refactor` | Code refactoring | refactor: Extract auth middleware |
| `test` | Tests | test: Add chatbot CRUD tests |
| `chore` | Maintenance | chore: Update dependencies |
| `perf` | Performance | perf: Optimize database queries |
| `build` | Build system | build: Configure Vercel |
| `ci` | CI/CD | ci: Add GitHub Actions |

**Commitlint Rules:**
- Header max length: 50 characters
- Subject case: Sentence case (capitalize first letter)
- No period at end
- Body: Separate with blank line
- Type: Must be from allowed list

**Examples:**

✅ **Good commits:**
```bash
feat: Add login endpoint
fix: Handle duplicate email error
docs: Update installation guide
chore: Upgrade Next.js to 16.0.1
```

❌ **Bad commits:**
```bash
added login  # Missing type, no capital
feat: added login endpoint  # Not sentence case
FIX: bug  # Type not lowercase
feature: This is a very long commit message that exceeds the fifty character limit  # Too long
```

---

## 8.3 Workflow Steps

### **Starting New Feature:**
```bash
# 1. Update develop branch
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/authentication

# 3. Work on feature
# ... make changes ...

# 4. Stage changes
git add .

# 5. Commit with proper message
git commit -m "feat: Add signup endpoint"

# 6. Push feature branch
git push -u origin feature/authentication
```

### **Creating Pull Request:**

**On GitHub:**
1. Go to repository
2. Click "Compare & pull request"
3. **Base:** `develop` ← **Compare:** `feature/authentication`
4. Title: `feat: Add authentication system`
5. Description:
```markdown
## Changes
- Add signup endpoint
- Add login endpoint
- Add profile endpoint
- Add logout endpoint
- Add auth middleware

## Testing
- [x] Manual testing
- [x] Unit tests added
- [x] Integration tests

## Screenshots
(if applicable)
```
6. Create pull request
7. Wait for review (or self-review)
8. Merge to develop

### **After PR Merged:**
```bash
# 1. Switch to develop
git checkout develop

# 2. Pull merged changes
git pull origin develop

# 3. Delete local feature branch
git branch -d feature/authentication

# 4. Delete remote feature branch
git push origin --delete feature/authentication
```

---

### **Merging to Main (Production):**
```bash
# 1. Create release branch from develop
git checkout develop
git checkout -b release/v1.0.0

# 2. Final testing, version bumps, changelog
# ... make any release preparations ...

# 3. Merge to main
git checkout main
git merge release/v1.0.0

# 4. Tag release
git tag -a v1.0.0 -m "Version 1.0.0 - First production release"

# 5. Push main and tags
git push origin main
git push origin --tags

# 6. Merge back to develop
git checkout develop
git merge release/v1.0.0

# 7. Push develop
git push origin develop

# 8. Delete release branch
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

---

## 8.4 Pre-commit Hooks

**Configured Hooks:**

### **.husky/pre-commit**
```bash
npm run validate
```

**What it does:**
1. Type checking (`npm run type-check`)
2. Linting (`npm run lint`)

**If any check fails → commit blocked**

---

### **.husky/commit-msg**
```bash
npx --no -- commitlint --edit $1
```

**What it does:**
- Validates commit message format
- Checks max length (50 chars)
- Checks sentence case
- Checks type is valid

**Example errors:**
```bash
$ git commit -m "added feature"
⧗   input: added feature
✖   type must be one of [feat, fix, docs, style, refactor, test, chore, perf, build, ci] [type-enum]
✖   subject may not be empty [subject-empty]
✖   found 2 problems, 0 warnings

$ git commit -m "feat: this is a very long commit message that exceeds fifty characters limit"
⧗   input: feat: this is a very long commit message that exceeds fifty characters limit
✖   header must not be longer than 50 characters, current length is 79 [header-max-length]
✖   found 1 problems, 0 warnings
```

---

## 8.5 Branch Protection Rules

**On GitHub (Settings → Branches):**

### **Protect `main` branch:**
- ✅ Require pull request before merging
- ✅ Require approvals (1)
- ✅ Dismiss stale reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators
- ✅ Restrict who can push (only maintainers)

### **Protect `develop` branch:**
- ✅ Require pull request before merging
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Allow force pushes (for maintainers only)

## 8.6 Git Best Practices

### **DO:**
- ✅ Commit often (small, logical commits)
- ✅ Write descriptive commit messages
- ✅ Pull before pushing
- ✅ Create feature branches for all work
- ✅ Delete branches after merge
- ✅ Review your own code before PR
- ✅ Keep commits atomic (one logical change)
- ✅ Test before committing

### **DON'T:**
- ❌ Commit directly to main or develop
- ❌ Push untested code
- ❌ Use generic messages ("fix bug", "update")
- ❌ Commit large binary files
- ❌ Force push to shared branches
- ❌ Mix multiple unrelated changes in one commit
- ❌ Commit sensitive data (API keys, passwords)

## 8.7 Hotfix Workflow

**For critical production bugs:**
```bash
# 1. Branch from main (not develop)
git checkout main
git pull origin main
git checkout -b hotfix/critical-security-patch

# 2. Fix the issue
# ... make changes ...

# 3. Commit
git add .
git commit -m "fix: Patch critical security vulnerability"

# 4. Push
git push -u origin hotfix/critical-security-patch

# 5. Create PR to main (urgent review)
# Merge to main

# 6. Also merge to develop
git checkout develop
git merge hotfix/critical-security-patch
git push origin develop

# 7. Tag new version
git checkout main
git tag -a v1.0.1 -m "Hotfix: Security patch"
git push origin --tags

# 8. Delete hotfix branch
git branch -d hotfix/critical-security-patch
git push origin --delete hotfix/critical-security-patch
```

---

# 9. Timeline & Milestones

## 9.1 Development Timeline

**Total Estimated Time:** 3-4 days of focused work (21-31 hours)

### Week 1: Foundation (Days 1-2)

**Day 1: Project Setup** ✅ **COMPLETED**
- Morning: Environment setup, dependencies
- Afternoon: Database schema, basic API
- Evening: Git workflow, commit standards
- **Deliverable:** Working project foundation

**Day 2: Authentication & Chatbots**
- Morning: Auth APIs (signup, login, profile) - 2 hours
- Afternoon: Chatbot CRUD APIs - 3 hours
- Evening: Testing auth & chatbot endpoints - 1 hour
- **Deliverable:** Complete backend APIs

### Week 1: Frontend & Integration (Days 3-4)

**Day 3: Dashboard Frontend**
- Morning: Login/signup pages, dashboard layout - 2 hours
- Afternoon: Chatbot management UI - 2 hours
- Evening: Analytics page - 2 hours
- **Deliverable:** Functional dashboard

**Day 4: Widget & WordPress**
- Morning: Chat widget development - 3 hours
- Afternoon: WordPress plugin - 3 hours
- Evening: Integration testing - 2 hours
- **Deliverable:** Complete integration

### Week 2: Polish & Launch (Day 5)

**Day 5: Testing & Deployment**
- Morning: Comprehensive testing, bug fixes - 2 hours
- Afternoon: Production deployment - 1 hour
- Evening: WordPress plugin submission - 1 hour
- **Deliverable:** Live product

---

## 9.2 Milestones

### Milestone 1: MVP Backend ✅ 50% COMPLETE
**Target:** End of Day 2  
**Status:** Phase 1 complete, Phase 2 starting

**Requirements:**
- [x] Database schema created
- [x] Basic chat API working
- [ ] Authentication system
- [ ] Chatbot CRUD APIs
- [ ] All APIs tested

**Success Criteria:**
- Can create customer account
- Can create/manage chatbots
- Chat API returns AI responses
- All endpoints documented

---

### Milestone 2: Dashboard Launch
**Target:** End of Day 3

**Requirements:**
- [ ] Customer can sign up/login
- [ ] Customer can create chatbots
- [ ] Customer can view analytics
- [ ] Dashboard is responsive
- [ ] Error handling works

**Success Criteria:**
- Complete user journey works end-to-end
- Dashboard loads in <1 second
- Mobile responsive
- No critical bugs

---

### Milestone 3: Widget & Plugin
**Target:** End of Day 4

**Requirements:**
- [ ] Chat widget works on test website
- [ ] WordPress plugin installable
- [ ] Widget customization works
- [ ] Messages send/receive correctly
- [ ] No CSS conflicts

**Success Criteria:**
- Widget loads in <300ms
- Works on multiple test sites
- WordPress plugin approved (or submitted)
- Documentation complete

---

### Milestone 4: Production Launch
**Target:** End of Day 5

**Requirements:**
- [ ] All tests passing
- [ ] Deployed to production
- [ ] Monitoring active
- [ ] WordPress plugin live (or pending review)
- [ ] Landing page live

**Success Criteria:**
- Application accessible at axilobot.com
- Zero critical bugs
- Can onboard first customer
- All smoke tests pass
- Error tracking active

---

## 9.3 Post-Launch Roadmap (Months 1-6)

### Month 1: Stability & Feedback
**Focus:** Get first 10 paying customers

**Tasks:**
- Monitor errors and fix bugs
- Gather user feedback
- Optimize performance
- Write blog posts
- Submit to Product Hunt

**KPIs:**
- 0 critical bugs
- <500ms API response time
- 10 paying customers
- 50+ free tier users

---

### Month 2-3: Features & Growth
**Focus:** Reach 50 paying customers

**New Features:**
- Shopify app
- Wix integration
- Custom AI training on customer data
- Advanced analytics dashboard
- Slack/Discord notifications
- Conversation tagging

**Marketing:**
- Content marketing (SEO)
- Paid ads ($500/month)
- Partnership with web design agencies
- Case studies from early customers

**KPIs:**
- 50 paying customers
- $1,500 MRR
- 500+ plugin installations

---

### Month 4-6: Scale & Expansion
**Focus:** Reach 200 customers, $6,000 MRR

**New Features:**
- Multi-language support
- Voice chatbot (Twilio integration)
- WhatsApp/SMS integration
- Advanced conversation flows
- Team collaboration features
- White-label solution

**Marketing:**
- Referral program (20% discount)
- Affiliate program (20% commission)
- Webinars
- Conference attendance
- PR push (TechCrunch, etc.)

**KPIs:**
- 200 paying customers
- $6,000 MRR
- 80% MoM growth
- 5-star reviews on WordPress

---

# 10. Future Roadmap

## 10.1 Phase 2 Features (Months 7-12)

### Advanced AI Capabilities
- Custom GPT-4 fine-tuning on customer data
- Multi-turn conversation context (50+ messages)
- Image recognition (customer sends screenshots)
- Voice-to-text input
- Sentiment analysis
- Auto-escalation to human agent

### Integrations
- Zapier integration (2,000+ app connections)
- Make.com integration
- HubSpot CRM
- Salesforce
- Zendesk
- Freshdesk
- Gmail/Outlook
- Calendar booking (Calendly, Cal.com)

### Analytics & Insights
- Conversation sentiment tracking
- Topic clustering (what customers ask most)
- Customer journey mapping
- A/B testing chatbot responses
- Export to Google Analytics
- Custom reports

### Team Features
- Multi-user accounts
- Role-based permissions (Admin, Editor, Viewer)
- Team inbox for escalated conversations
- Internal notes on conversations
- Agent handoff

### Customization
- Visual chatbot builder (no-code flow builder)
- Custom CSS for widget
- Custom domains (widget.yourbrand.com)
- Branded mobile apps (white-label)

---

## 10.2 Long-term Vision (Years 2-3)

### Become the Intercom Alternative
- Live chat (human + AI hybrid)
- Help desk ticketing system
- Knowledge base
- Product tours
- In-app messaging
- Email campaigns
- Push notifications

### Enterprise Features
- SSO (Single Sign-On)
- SAML authentication
- SOC 2 compliance
- HIPAA compliance (healthcare)
- 99.99% SLA
- Dedicated infrastructure
- Private cloud deployment
- Custom AI model hosting

### AI Marketplace
- Pre-trained bots for industries:
  - E-commerce (Shopify optimized)
  - SaaS (support + onboarding)
  - Healthcare (HIPAA compliant)
  - Real estate (property inquiries)
  - Education (student support)
- Community-contributed prompts
- Bot templates marketplace

### Conversational Commerce
- In-chat payments (Stripe integration)
- Product recommendations
- Cart abandonment recovery
- Upselling/cross-selling
- Order tracking
- Return/refund handling

---

## 10.3 Revenue Projections (3-Year)

### Year 1
- Customers: 500 (50% free, 50% paid)
- MRR: $7,500
- ARR: $90,000
- Churn: 15%
- Team: 1-2 people
- Profitability: Month 9

### Year 2
- Customers: 2,000 (40% free, 60% paid)
- MRR: $40,000
- ARR: $480,000
- Churn: 10%
- Team: 3-5 people
- Profitability: Entire year

### Year 3
- Customers: 5,000 (30% free, 70% paid)
- MRR: $120,000
- ARR: $1,440,000
- Churn: 8%
- Team: 8-12 people
- Exit/Acquisition considerations

---

## 10.4 Potential Exit Strategies

### Option 1: Bootstrap to $10M ARR (5-7 years)
- Stay independent
- Lifestyle business
- 80%+ profit margins
- No dilution

### Option 2: Seed/Series A Funding (Year 2-3)
- Raise $1-3M to accelerate growth
- Scale faster (more features, bigger team, marketing)
- Target: $10M+ ARR in 3-4 years
- Exit: $50-150M acquisition

### Option 3: Acquisition (Year 2-5)
**Potential Acquirers:**
- **Zendesk**: Expanding AI capabilities
- **Intercom**: Eliminating competition
- **HubSpot**: Adding chatbot to CRM
- **Shopify**: Native e-commerce support
- **WordPress/Automatic**: Integrated solution
- **Private Equity**: Roll-up strategy

**Valuation Multiples:**
- SaaS companies typically: 5-10x ARR
- High-growth SaaS: 10-20x ARR
- At $1M ARR: $5-10M acquisition
- At $5M ARR: $25-50M acquisition

---

# 11. Risk Analysis & Mitigation

## 11.1 Technical Risks

### Risk 1: AI API Reliability
**Probability:** Medium  
**Impact:** High

**Issue:** Google Gemini API downtime or quality issues

**Mitigation:**
- Multi-provider strategy (fallback to Claude/GPT-4)
- Queue system for retries
- Clear error messages to users
- SLA monitoring and alerts

---

### Risk 2: Scaling Costs
**Probability:** High  
**Impact:** Medium

**Issue:** As users grow, AI API costs increase faster than revenue

**Mitigation:**
- Implement strict rate limiting
- Optimize prompts (reduce tokens)
- Tiered pricing reflects actual costs
- Monitor unit economics closely
- Negotiate volume discounts with AI providers

---

### Risk 3: Database Performance
**Probability:** Medium  
**Impact:** Medium

**Issue:** Slow queries as data grows

**Mitigation:**
- Proper indexing from day 1
- Connection pooling
- Query optimization
- Database monitoring (Supabase dashboard)
- Archive old conversations (>1 year)

---

## 11.2 Business Risks

### Risk 1: Competition
**Probability:** High  
**Impact:** High

**Issue:** Intercom, Drift, or new competitor launches similar product

**Mitigation:**
- Focus on specific niche (WordPress/Shopify SMBs)
- Better pricing (underprice incumbents)
- Faster product iterations
- Superior customer support
- Build strong brand and community

---

### Risk 2: Slow Customer Acquisition
**Probability:** Medium  
**Impact:** High

**Issue:** Fail to reach 50 paying customers in 6 months

**Mitigation:**
- Generous free tier (word of mouth)
- WordPress plugin (distribution channel)
- Content marketing (SEO)
- Direct outreach to early adopters
- Pivot pricing or features based on feedback

---

### Risk 3: High Churn
**Probability:** Medium  
**Impact:** High

**Issue:** Customers cancel after 1-2 months

**Mitigation:**
- Onboarding email sequence
- Success team check-ins
- Usage analytics (identify at-risk customers)
- Continuously improve product
- Lock-in features (data, API integrations)

---

## 11.3 Legal & Compliance Risks

### Risk 1: GDPR/Privacy Violations
**Probability:** Low  
**Impact:** Critical

**Issue:** Mishandling EU customer data

**Mitigation:**
- GDPR-compliant data handling from day 1
- Data deletion API
- Privacy policy and terms of service
- Cookie consent
- Data processing agreement for Enterprise

---

### Risk 2: AI Hallucinations/Misinformation
**Probability:** High  
**Impact:** Medium

**Issue:** AI gives incorrect information, customer complaints

**Mitigation:**
- Clear disclaimer ("AI may make mistakes")
- Allow customers to review conversations
- Human escalation option
- Refine prompts to reduce hallucinations
- Terms of service limit liability

---

### Risk 3: Security Breach
**Probability:** Low  
**Impact:** Critical

**Issue:** Database hacked, customer data stolen

**Mitigation:**
- Supabase handles infrastructure security
- Row Level Security (RLS) policies
- API rate limiting
- Security audits (yearly)
- Bug bounty program (future)
- Cyber insurance (future)

---

# 12. Success Metrics & KPIs

## 12.1 Product Metrics

### Activation Rate
- **Definition:** % of signups who create their first chatbot
- **Target:** 60% within 24 hours
- **How to measure:** (Users who created chatbot) / (Total signups)

### Time to Value
- **Definition:** Time from signup to first chat message
- **Target:** <10 minutes
- **How to measure:** Track timestamps

### Daily Active Users (DAU)
- **Definition:** Customers who login to dashboard daily
- **Target:** 30% of paid users
- **How to measure:** Unique logins per day

### Chat Volume
- **Definition:** Total messages processed
- **Target:** 1,000 messages/day by Month 3
- **How to measure:** Count rows in messages table

---

## 12.2 Business Metrics

### Monthly Recurring Revenue (MRR)
- **Definition:** Predictable monthly revenue
- **Target:** 
  - Month 3: $500
  - Month 6: $1,500
  - Month 12: $7,500
- **How to measure:** Sum of all active subscriptions

### Customer Acquisition Cost (CAC)
- **Definition:** Cost to acquire one paying customer
- **Target:** <$50 (3:1 LTV:CAC ratio)
- **How to measure:** (Marketing spend) / (New customers)

### Lifetime Value (LTV)
- **Definition:** Revenue per customer over their lifetime
- **Target:** >$150 (avg customer stays 6+ months at $29/mo)
- **How to measure:** (Avg monthly revenue per customer) / (Monthly churn rate)

### Churn Rate
- **Definition:** % of customers who cancel monthly
- **Target:** <10%
- **How to measure:** (Canceled subscriptions) / (Total subscriptions)

### Free-to-Paid Conversion
- **Definition:** % of free users who upgrade
- **Target:** 10%
- **How to measure:** (Paid upgrades) / (Free users)

---

## 12.3 Technical Metrics

### API Response Time
- **Target:** <500ms (95th percentile)
- **Tool:** Vercel Analytics

### Uptime
- **Target:** 99.9% (43 minutes downtime/month max)
- **Tool:** UptimeRobot

### Error Rate
- **Target:** <0.1% of requests
- **Tool:** Sentry

### Chat Response Time
- **Target:** <2 seconds from send to receive
- **Tool:** Custom tracking

---

## 12.4 Dashboard for Monitoring

**Tools to Set Up:**

1. **Vercel Analytics** (Free)
   - Page load times
   - Core Web Vitals
   - Traffic sources

2. **PostHog** (Free tier)
   - User behavior tracking
   - Funnel analysis
   - Feature flags

3. **Supabase Dashboard** (Built-in)
   - Database performance
   - Query analysis
   - Row counts

4. **Stripe Dashboard** (Built-in)
   - Revenue tracking
   - Subscription metrics
   - Failed payments

5. **Custom Admin Dashboard** (Build in Phase 4)
   - Real-time metrics
   - Customer list
   - Support tickets

---

# 13. Conclusion

## 13.1 Summary

Axilobot is positioned to capture a significant share of the SMB chatbot market by offering:

1. **Superior Value**: AI chatbot capabilities at 50-80% lower cost than competitors
2. **Easy Integration**: WordPress plugin + simple JavaScript snippet
3. **Fast Time to Value**: Create and deploy a chatbot in under 10 minutes
4. **Scalable Technology**: Modern stack (Next.js, Supabase, Gemini) with room to grow
5. **Clear Monetization**: Proven SaaS subscription model with tiered pricing

## 13.2 Critical Success Factors

**To succeed, we must:**

✅ **Ship Fast** - Get MVP live in 3-4 days, iterate based on user feedback  
✅ **Focus on SMBs** - Don't try to compete with enterprise features initially  
✅ **Nail WordPress** - WordPress plugin is distribution channel #1  
✅ **Provide Value** - Free tier must be genuinely useful (build trust)  
✅ **Support Well** - Early customers need hand-holding (worth the time)  
✅ **Iterate Quickly** - Weekly feature releases, daily bug fixes  
✅ **Monitor Metrics** - Watch churn, activation, usage religiously

## 13.3 Next Immediate Steps

**Right Now (Next 2 Hours):**
1. ✅ Complete documentation (you're reading it!)
2. 🚧 Start Phase 2: Authentication APIs
3. Create test customer account
4. Test signup/login flow

**Today (Next 8 Hours):**
1. Finish Authentication (Phase 2)
2. Complete Chatbot Management APIs (Phase 3)
3. End-to-end API testing
4. Fix any bugs found

**Tomorrow:**
1. Build Dashboard Frontend (Phase 4)
2. Create chat widget (Phase 5)
3. Internal testing with real scenarios

**Day After:**
1. Build WordPress plugin (Phase 6)
2. Comprehensive QA (Phase 8)
3. Deploy to production (Phase 9)

---

## 13.4 Contact & Support

**Developer:** Naruto  
**Project:** Axilobot  
**Start Date:** November 2025  
**Current Phase:** Phase 2 - Authentication  
**Documentation Version:** 1.0

**When stuck:**
1. Review this documentation
2. Check Supabase docs: https://supabase.com/docs
3. Check Next.js docs: https://nextjs.org/docs
4. Search GitHub issues for similar problems

**Remember:**
- Perfect is the enemy of done
- Ship fast, iterate faster
- Customer feedback > our assumptions
- Technical debt is okay in MVP
- We can refactor later

---

# Appendix A: Quick Reference Commands

## Git Commands
```bash
# Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/name

# Commit work
git add .
git commit -m "type: Description"
git push -u origin feature/name

# Merge to develop
git checkout develop
git merge feature/name
git push origin develop
git branch -d feature/name
```

## NPM Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
npm run validate     # Run all checks
```

## Supabase Commands
```bash
supabase start       # Start local Supabase
supabase db reset    # Reset database
supabase migration new name  # Create migration
```

---

# Appendix B: Environment Variables

## Required Environment Variables
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJI...

# Google Gemini AI
GEMINI_API_KEY=AIzaSy...

# Optional (for production)
SENTRY_DSN=https://...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

# Appendix C: Database Backup Strategy

## Backup Schedule
- **Supabase Pro:** Daily automatic backups (7-day retention)
- **Manual backups:** Weekly during development
- **Pre-deployment backups:** Always before major changes

## Restore Process
```bash
# Via Supabase dashboard
# Settings → Database → Point-in-time Recovery
```

---

# Appendix D: Deployment Checklist
```bash
Pre-Deployment:
[ ] All tests passing
[ ] No console errors
[ ] Environment variables set
[ ] Database migrations applied
[ ] API documentation updated
[ ] Error tracking configured

Post-Deployment:
[ ] Smoke tests passed
[ ] SSL certificate active
[ ] DNS configured correctly
[ ] Monitoring active
[ ] Error alerts configured
[ ] Backup verified

First Week:
[ ] Monitor error rates daily
[ ] Check performance metrics
[ ] Review user feedback
[ ] Fix critical bugs immediately
[ ] Celebrate launch! 🎉
```

---

**END OF DOCUMENTATION**

---

**This document is a living guide. Update it as the project evolves. Good luck building Axilobot! 🚀**
