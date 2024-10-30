document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const billingToggle = document.getElementById('billing-toggle');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = contactForm.elements['name'].value;
            const email = contactForm.elements['email'].value;
            const subject = contactForm.elements['subject'].value;
            const message = contactForm.elements['message'].value;

            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            const priceAmounts = document.querySelectorAll('.price-amount');
            const pricePeriods = document.querySelectorAll('.price-period');

            priceAmounts.forEach(amount => {
                const currentPrice = parseInt(amount.textContent);
                if (this.checked) {
                    amount.textContent = Math.round(currentPrice * 10);
                } else {
                    amount.textContent = Math.round(currentPrice / 10);
                }
            });

            pricePeriods.forEach(period => {
                period.textContent = this.checked ? '/year' : '/month';
            });
        });
    }

    // 게시물 자세히보기 기능
    const postLinks = document.querySelectorAll('.post-link');
    const modal = document.getElementById('post-modal');
    const closeBtn = document.querySelector('.close');
    const postTitle = document.getElementById('post-title');
    const postInfo = document.getElementById('post-info');
    const postContent = document.getElementById('post-content');

    postLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.getAttribute('data-post-id');
            openPostModal(postId);
        });
    });

    closeBtn.addEventListener('click', closePostModal);

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closePostModal();
        }
    });

    function openPostModal(postId) {
        // 여기서 실제로는 서버에서 게시물 데이터를 가져와야 합니다.
        // 이 예제에서는 간단히 하드코딩된 데이터를 사용합니다.
        const postData = {
            1: {
                title: "블록체인 기술의 미래 전망",
                author: "암호화폐전문가",
                date: "2023-04-13",
                content: "블록체인 기술은 금융, 공급망 관리, 의료 등 다양한 산업에 혁명을 일으킬 것으로 예상됩니다. 특히 탈중앙화 금융(DeFi)과 대체 불가능 토큰(NFT)의 성장이 주목됩니다."
            },
            2: {
                title: "DApp 개발 모범 사례",
                author: "이더리움개발자",
                date: "2023-04-14",
                content: "효율적인 DApp 개발을 위해서는 스마트 컨트랙트 최적화, 사용자 경험 개선, 보안 강화 등이 중요합니다. 특히 가스 비용 최적화와 오라클 사용에 주의를 기울여야 합니다."
            },
            3: {
                title: "스마트 컨트랙트 개발 팁 공유",
                author: "블록체인마스터",
                date: "2023-04-15",
                content: "스마트 컨트랙트 개발 시 재진입 공격 방지, 가스 최적화, 적절한 에러 처리 등이 중요합니다. 또한 OpenZeppelin 라이브러리를 활용하면 보안성 높은 컨트랙트를 쉽게 개발할 수 있습니다."
            }
        };

        const post = postData[postId];
        postTitle.textContent = post.title;
        postInfo.textContent = `작성자: ${post.author} | 작성일: ${post.date}`;
        postContent.textContent = post.content;

        modal.style.display = "block";
    }

    function closePostModal() {
        modal.style.display = "none";
    }
});

function toggleServiceDetails(element) {
    element.classList.toggle('active');
}

function toggleFAQ(element) {
    element.classList.toggle('active');
}