const list = document.getElementsByClassName('.list')
const dropdown = document.querySelector('.container-dropdown')

const home = document.getElementById('home')
const pages = document.getElementById('pages')
const portfolio = document.getElementById('portfolio')



home.addEventListener('mouseenter', () => {
        const homeDropdown = home.querySelector('.container-dropdown');
        homeDropdown.classList.remove('hidden');
    
        home.addEventListener('mouseleave', () => {
            homeDropdown.classList.add('hidden');
        });
    });

    pages.addEventListener('mouseenter', () => {
        const pagesDropdown = pages.querySelector('.container-dropdown');
        pagesDropdown.classList.remove('hidden');
    
        pages.addEventListener('mouseleave', () => {
            pagesDropdown.classList.add('hidden');
        });
    });

    portfolio.addEventListener('mouseenter', () => {
        const portfolioDropdown = portfolio.querySelector('.container-dropdown');
        portfolioDropdown.classList.remove('hidden');
    
        portfolio.addEventListener('mouseleave', () => {
            portfolioDropdown.classList.add('hidden');
        });
    });