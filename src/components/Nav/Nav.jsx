import { useLocation } from 'react-router-dom';
import  navRoutes from './NavRoutes';
import { StyledListItem, StyledNavButton, StyledNavLink } from './Nav.styled';

 const Nav = () => {
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav>
            <ul>
                {navRoutes.map(({ name, route }) => (
                    <StyledListItem key={name}>
                        {location.pathname === route ? (
                            <StyledNavButton type="button" onClick={scrollToTop}>
                                {name}
                            </StyledNavButton>
                        ) : (
                            <StyledNavLink to={route} state={{ from: 'Cocktail' }}>
                                {name}
                            </StyledNavLink>
                        )}
                    </StyledListItem>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;