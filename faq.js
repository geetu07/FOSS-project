const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', function(){
                const answer = question.nextElementSibling;

                // Toggle visibility of the answer
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    question.classList.remove('active');
                } else {
                    answer.style.display = 'block';
                    question.classList.add('active');
                }
            });
        });