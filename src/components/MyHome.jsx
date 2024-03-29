import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faTh, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import FilmGallery from "./FilmGallery";

const MyHome = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="mb-4 me-4 mt-1">Home</h2>
                </div>
                <div className="mt-3">
                    <FontAwesomeIcon icon={faThLarge} className="icons" />{" "}
                    <FontAwesomeIcon icon={faTh} className="icons" />
                </div>
            </div>

            <Form className="mb-4">
                <Form.Group controlId="searchBar" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Cerca..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </Form.Group>
            </Form>
            {searchTerm ? (
                <FilmGallery title="Search Results" searchTerm={searchTerm} />
            ) : (
                <>
                    <FilmGallery title="Harry Potter" />
                    <FilmGallery title="Star Wars" />
                    <FilmGallery title="Marvel" />
                </>
            )}
            
        </div>
    );
};

export default MyHome;