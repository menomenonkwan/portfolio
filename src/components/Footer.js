// styles
import './Footer.css';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>&copy; {year} Brannon Lee</p>
    </footer>
  )
}
