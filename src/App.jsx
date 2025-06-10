import { Comment } from "./components/Comment";
const commentsData = [
  {
    id: 1,
    user: "Armaan",
    image: "https://imgs.search.brave.com/gqFzT8cj61NbKtg-wtyHfQofo73ExCMUNy0-7T1geig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzYWZhcmku/Y29tL2ltYWdlL2Fu/aW1lLWxhbmRzY2Fw/ZS13YWxscGFwZXJz/LmpwZw",
    text: "Did anyone apply for AKTU re-evaluation? My marks feel totally off in COA.",
    timeAgo: "2d ago",
    replies: [
      {
        id: 2,
        user: "Harshit",
        image: "https://imgs.search.brave.com/UsR7fbbhz4JTyZDiNGgeZtgM-OWH09SmgLMAoONd7O8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Vu/c2V0LW92ZXItYS1m/aWVsZC1hZXN0aGV0/aWMtYW5pbWUtc2Nl/bmVyeS1rOGJmM3N6/ejBuNTRtYjdjLmpw/Zw",
        text: "Same here, applied for DE and OS. Hope they check it properly this time.",
        timeAgo: "1d ago",
        replies: [
          {
            id: 3,
            user: "Anmol",
            image: "https://imgs.search.brave.com/bUbVgCzatxoRoLUtJ8wjMYiozfLfJLCLnoQ4QEblAaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU2ODM0/MjAuanBn",
            text: "They changed my result last semester after re-eval. It’s rare, but it happens!",
            timeAgo: "12h ago",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        user: "Kamran",
        image: "https://imgs.search.brave.com/f2B_EMRCmffCu8lTEXqsA7nhkTMR2ga7Ps5bVizY2r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjU0NS5qcGc",
        text: "Bro I applied last year and nothing changed. Waste of 2800 per subject. 😤",
        timeAgo: "3d ago",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    user: "Harsh",
    image: "https://imgs.search.brave.com/5tOrnoRWjobWeygx2zGO-yezR0_v-U340_Drj5QPB1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS84NS85/NC9JdGJXVG0uanBn",
    text: "Why does AKTU always delay results? This is mentally exhausting.",
    timeAgo: "4d ago",
    replies: [
      {
        id: 6,
        user: "Akshdeep",
        image: "https://imgs.search.brave.com/JpyDiYq2l2SHesDpvKP9o3iDUoLAVNm9aDK7gtHgKRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjUzOC5qcGc",
        text: "Fr! Every semester we keep checking ERP like fools. 😞",
        timeAgo: "3d ago",
        replies: [
          {
            id: 7,
            user: "Dhairya",
            image: "https://imgs.search.brave.com/bpEs7QhsrJ_3Ewe_e-6f57lRej1SzI6ufFTYDHsXR-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE1/ODQuanBn",
            text: "Even ERP crashes when results are out lol. Can't even handle traffic.",
            timeAgo: "1d ago",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    user: "Ansh",
    image: "https://imgs.search.brave.com/DtGgyzCNqFgQbk3zHVZaX_etkDAWp-7DrryWI_tJPzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE2/MzEuanBn",
    text: "When are AKTU end sem exams starting? Some say from 27th June?",
    timeAgo: "1d ago",
    replies: [
      {
        id: 9,
        user: "Hannaan",
        image: "https://imgs.search.brave.com/CzosnLk6oF1dP8yUhjreA7mrelqSWkPV0Fdz7WPjE7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS83MC81/OC9Jb1lYZ0UuanBn",
        text: "Yup, for CSE 2nd yr it's starting 18th. Timetable is out on college group.",
        timeAgo: "20h ago",
        replies: [
          {
            id: 10,
            user: "Armaan",
            image: "https://imgs.search.brave.com/gqFzT8cj61NbKtg-wtyHfQofo73ExCMUNy0-7T1geig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzYWZhcmku/Y29tL2ltYWdlL2Fu/aW1lLWxhbmRzY2Fw/ZS13YWxscGFwZXJz/LmpwZw",
            text: "No gaps again 💀. AKTU really wants us to suffer.",
            timeAgo: "15h ago",
            replies: [],
          },
        ],
      },
      {
        id: 11,
        user: "Kamran",
        image: "https://imgs.search.brave.com/f2B_EMRCmffCu8lTEXqsA7nhkTMR2ga7Ps5bVizY2r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjU0NS5qcGc",
        text: "Mine starts on 20th but clashing with a competitive exam 😞",
        timeAgo: "18h ago",
        replies: [],
      },
    ],
  },
  {
    id: 12,
    user: "Anmol",
    image: "https://imgs.search.brave.com/bUbVgCzatxoRoLUtJ8wjMYiozfLfJLCLnoQ4QEblAaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU2ODM0/MjAuanBn",
    text: "AKTU practicals this time were a disaster 💀",
    timeAgo: "1d ago",
    replies: [
      {
        id: 13,
        user: "Dhairya",
        image: "https://imgs.search.brave.com/bpEs7QhsrJ_3Ewe_e-6f57lRej1SzI6ufFTYDHsXR-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE1/ODQuanBn",
        text: "My external didn’t even let me explain the output. Just gave random viva marks.",
        timeAgo: "20h ago",
        replies: [],
      },
      {
        id: 14,
        user: "Harshit",
        image: "https://imgs.search.brave.com/UsR7fbbhz4JTyZDiNGgeZtgM-OWH09SmgLMAoONd7O8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Vu/c2V0LW92ZXItYS1m/aWVsZC1hZXN0aGV0/aWMtYW5pbWUtc2Nl/bmVyeS1rOGJmM3N6/ejBuNTRtYjdjLmpw/Zw",
        text: "Literally copied code from ChatGPT in front of ma’am. She didn’t care 😭",
        timeAgo: "18h ago",
        replies: [
          {
            id: 15,
            user: "Harsh",
            image: "https://imgs.search.brave.com/5tOrnoRWjobWeygx2zGO-yezR0_v-U340_Drj5QPB1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS84NS85/NC9JdGJXVG0uanBn",
            text: "Lucky you bro. Mine asked DBMS triggers in a Java practical. 💀",
            timeAgo: "16h ago",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 16,
    user: "Hannaan",
    image: "https://imgs.search.brave.com/CzosnLk6oF1dP8yUhjreA7mrelqSWkPV0Fdz7WPjE7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS83MC81/OC9Jb1lYZ0UuanBn",
    text: "My AKTU result is showing 'Withheld'. What does that mean??",
    timeAgo: "5h ago",
    replies: [
      {
        id: 17,
        user: "Ansh",
        image: "https://imgs.search.brave.com/DtGgyzCNqFgQbk3zHVZaX_etkDAWp-7DrryWI_tJPzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE2/MzEuanBn",
        text: "Maybe some paper was not checked properly or pending re-evaluation?",
        timeAgo: "4h ago",
        replies: [],
      },
      {
        id: 18,
        user: "Akshdeep",
        image: "https://imgs.search.brave.com/JpyDiYq2l2SHesDpvKP9o3iDUoLAVNm9aDK7gtHgKRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjUzOC5qcGc",
        text: "Happened to me too last sem. Raised a complaint on ERP support.",
        timeAgo: "3h ago",
        replies: [],
      },
    ],
  },
  {
    id: 19,
    user: "Dhairya",
    image: "https://imgs.search.brave.com/bpEs7QhsrJ_3Ewe_e-6f57lRej1SzI6ufFTYDHsXR-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTE1/ODQuanBn",
    text: "Anyone got their backlog cleared this semester? Pls share tips!",
    timeAgo: "2d ago",
    replies: [
      {
        id: 20,
        user: "Kamran",
        image: "https://imgs.search.brave.com/f2B_EMRCmffCu8lTEXqsA7nhkTMR2ga7Ps5bVizY2r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzA1/MjU0NS5qcGc",
        text: "Attend all classes and do your assignments on time. Trust me it helps.",
        timeAgo: "1d ago",
        replies: [],
      },
      {
        id: 21,
        user: "Harshit",
        image: "https://imgs.search.brave.com/UsR7fbbhz4JTyZDiNGgeZtgM-OWH09SmgLMAoONd7O8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Vu/c2V0LW92ZXItYS1m/aWVsZC1hZXN0aGV0/aWMtYW5pbWUtc2Nl/bmVyeS1rOGJmM3N6/ejBuNTRtYjdjLmpw/Zw",
        text: "Focus on understanding concepts rather than mugging up. That saved me.",
        timeAgo: "20h ago",
        replies: [],
      },
    ],
  },
];
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Comments</h1>
      {commentsData.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}