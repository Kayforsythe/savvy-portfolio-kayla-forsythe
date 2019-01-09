export default function contact(){
return `
<form action="https://formspree.io/kaylarobideau@gmail.com" method="POST">
      <input type="text" name="firstname" placeholder="First Name" size="100" required>
      <input type="text" name="lastname" placeholder="Last Name" size="100" required>
      <input type="email" name="_replyto" placeholder="your.email@example.com" required>
      
      <i class="far fa-paper-plane"></i>
      <input type="submit" value="Send">
      </form>
      
      <label>What's this message about?</label>
      <input type="radio" name="subject" value="professional" checked><span>I'd like to hire you!</span>
      <input type="radio" name="subject" value="personal" checked><span>Personal message</span>
      <input type="radio" name="subject" value="other" checked><span>Don't know/something else</span>
      

      <input type="checkbox" name="optin" value="trusting" checked>Subscribe me to your newsletter!
      <input type="checkbox" name="optout" value="skeptical" disabled>Cheeky checkbox...
      
      
      <i class="fas fa-comment"></i>
      <textarea name="user_message" rows="8" cols="40"></textarea>
      
      <i class="far fa-paper-plane"></i>
      <input type="submit">
      </form>

`;
}