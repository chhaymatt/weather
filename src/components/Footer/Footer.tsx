import { Button } from "@mui/material"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer>
            <Button
                variant="text"
                target="_blank"
                rel="noreferrer"
                href="https://matthewchhay.com/"
            >{`${year} | Made by Matthew Chhay`}</Button>
        </footer>
    )
}

export default Footer
