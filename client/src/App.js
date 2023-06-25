import { useState } from "react"

import axios from "axios"
import './App.css';

function App() {

  const [data, setData] = useState("")
  const [myPassword, setMyPassword] = useState("")

  const getAnswer = async () => {
    const res = await axios.post("/api/get-answer", { myPassword })
    setData(res.data)
  }

  return (
    <>
      <head>
        <title>You've been using your password wrong! </title>
      </head>
      <body>

        <h1 style={{ color: "#f00", fontSize: "2rem", background: "#ff0" }}>DON'T USE THE SAME PASSWORD TWICE</h1>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 3 }}>
            <h4>Why not you ask? then let me tell you why</h4>
            <p>handing your precious password to a random site is very dangerous</p>
            <h3>A <b style={{ color: "#f00", fontSize: "1.6rem", fontWeight: 1000 }}>REAL</b> AND <span style={{ fontSize: "1.8rem" }}><span style={{ color: "#f00" }}>T</span><span style={{ color: "#f0f" }}>E</span><span style={{ color: "#0f0" }}>R</span><span style={{ color: "#0ff" }}>R</span><span style={{ color: "#00f" }} > I</span><span style={{ color: "#f0f" }}>F</span><span style={{ color: "#f00" }}>Y</span><span style={{ color: "#0ff" }}>I</span><span style={{ color: "#f0f" }}>N</span><span style={{ color: "#0f0" }}>G</span> </span>STORY!</h3>
            <h4 style={{ color: "black", background: "orange" }}>He used the same password for his netflix accuont and gave it to a random site and now his algorithm is ruined!!</h4>
            <p>One day, Israel Israeli, opened netflex to waych some shows. However, he was completly shocked to discover that his netflix accout was all over the place! He was hacked!! how terrible!
              How did this happen? well well, ill tell you. He entered a wonderful website that promised him a free delivery of flowers
              to his fried if he registerd,
              Isreali didnt think twice(didnt think at all) and register the site with his one and only password!
              Unfortenetly, this site was a scam, and his password was now stolen! <b>He was very sad that it happend.</b>
            </p>
            <div style={{ border: "1px solid green", padding: "0 1rem", backgroundColor: "#964B0030" }}>
              <h2>A short horror story about the dangers that lurk within the web, by the award winning author, Geppetto:</h2>
              <p>Once upon a time, in a quiet little town, there lived a person named Alex. They were an ordinary individual who led a mundane life, completely oblivious to the dangers lurking in the digital realm. Alex had a peculiar habit of using the same password for every online account they possessed. It was a convenient approach, or so they believed, until a chain of<b> horrifying events began to unfold.</b></p>
              <p> One eerie night, as Alex sat in their dimly lit room, browsing the internet on their trusty laptop, a strange email appeared in their inbox. The subject line read, "Your darkest secret revealed." Intrigued and unnerved, Alex clicked on the email, unaware of the<i> sinister trap that awaited them.</i></p>
              <p> The email contained a cryptic message: "I know your secret. Your password is the key." The contents sent shivers down Alex's spine, as the sender seemed to know something deeply personal about them. Panic consumed their thoughts, and they desperately searched their memory to decipher the mystery.</p>
              <p> In a state of mounting dread, Alex finally realized that their password had been used for two sites—both an innocent social media platform and a seemingly harmless online banking portal. As beads of sweat formed on their forehead, they quickly realized the<b><i> grave mistake</i></b> they had made.</p>
              <p> Within moments, their social media account began to act strangely. Photos they had never posted began appearing on their profile, depicting disturbing images that sent a chill down their spine. Each picture seemed to be a reflection of their<i> deepest fears and hidden secrets</i>, meticulously crafted to torment their very soul.</p>
              <p> While they struggled to regain control of their social media presence, an even more terrifying scenario unfolded. Their bank account, usually a safe haven for their hard-earned money, became a playground for an<b> unseen predator.</b> Transfers and withdrawals were executed with flawless precision, draining their funds and leaving them <i>powerless.</i></p>
              <p> As the walls closed in around them, Alex's life spiraled into chaos. The digital world had become their worst nightmare, exploiting their reckless habit of reusing passwords. Every corner of their existence was violated by an anonymous figure, reveling in their torment and exploiting their fears.</p>
              <p> In a last-ditch effort to salvage their shattered life, Alex sought the help of a skilled cybersecurity expert. Days turned into nights as the expert battled against the darkness that had enveloped Alex's world. Finally, a glimmer of hope emerged—an intricate web of deceit was uncovered, leading to the perpetrator behind the horrors.</p>
              <p> The antagonist, a malevolent hacker, had exploited Alex's carelessness, using their shared password to unleash havoc upon their life. Motivated by a desire to expose the vulnerability of their victims, they reveled in the chaos they created, deriving sick pleasure from their victims' suffering.</p>
              <p> In the end, justice prevailed, and the hacker was brought to account for their wicked deeds. However, Alex's life was forever scarred by the ordeal. They became a cautionary tale, a reminder to others of the terrifying consequences of neglecting online security.</p>
              <p> From that day forward, Alex dedicated themselves to spreading awareness about password hygiene and digital security. Their harrowing experience served as a chilling reminder to all who heard their story - <i style={{ color: "red", fontSize: "1.2rem" }}>a stark warning that the seemingly innocent act of reusing passwords could lead to unimaginable horrors in the darkest corners of the internet.</i></p>
            </div>

          </div>
          <div style={{ backgroundColor: "beige", border: "solid 1px red", padding: "0 1rem", margin: "1rem", flex: 1 }}>
            <h3>Here is a word from our expert, chatgpt</h3>
            <p>As an expert in web security, it is my duty to caution against the grave mistake of reusing passwords across multiple websites. Let me illustrate the potential horrors that can unfold when one disregards this crucial aspect of online security.
              In our story, there is a person named Sarah, an intelligent and tech-savvy individual who prided herself on her cautious approach to the digital world. However, Sarah fell into the common trap of using the same password for two seemingly unrelated websites—a choice that would soon prove to be her greatest downfall.</p>
            <p>The nightmare began when hackers breached Sarah's social media account. They exploited her shared password and wreaked havoc, posting unsettling content and manipulating her connections. Sarah's online presence spiraled into chaos as her friends and family became unwitting participants in this digital nightmare.
              But the nightmare didn't end there. The malicious hackers, armed with Sarah's stolen credentials, turned their attention to her online shopping account. With unrestricted access, they unleashed financial devastation. Unapproved purchases drained Sarah's bank account, while fraudulent orders flooded her purchase history. Helpless and trapped, Sarah witnessed her hard-earned money vanish before her eyes.
              Sarah's harrowing ordeal serves as a haunting reminder of the vital importance of practicing good password hygiene. By using the same password for multiple sites, she unknowingly handed over the keys to her digital life. Let her story be a cautionary tale—a stark reminder to all who venture into the digital realm to prioritize strong, unique passwords for each and every online account. For within the darkest corners of the internet, the price of negligence may be far more terrifying than one can imagine.</p>
          </div>

        </div>
        <p> here, give me your password and ill tell you who knows it✨</p>
        <div style={{ margin: "0.7rem", display: "flex", flexDirection: "row", gap: "0.5rem" }}>
          <input value={myPassword} onChange={e => { setMyPassword(e.target.value) }} style={{ width: "13rem", height: "1.5rem" }} placeholder="type it here dont be shy"></input>
          <input onClick={getAnswer} type="submit" value="tell me who has my password!"></input>
        </div>
        <div>
          answer:<span style={{ fontSize: "1.3rem" }}> {data}</span>

        </div>
      </body >
    </>
  );
}

export default App;
