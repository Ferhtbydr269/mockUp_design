/* ============================================
   MCBÜ Career System
   Ana JavaScript Dosyası - Backend Simülasyonu ile
   ============================================ */

// ============================================
// BACKEND SİMÜLASYON - CLASS MODELLER
// ============================================

// Student Class - Öğrenci nesnesi
class Student {
    constructor(name, studentId, department, skills = [], certifications = []) {
        this.name = name;
        this.studentId = studentId;
        this.department = department;
        this.skills = skills;
        this.certifications = certifications;
        this.cv = null;
        this.enrolledCourses = [];
        this.internshipApplications = [];
    }

    updateCV(cvData) {
        this.cv = cvData;
        console.log(`${this.name} CV'sini güncelledi.`);
        this.analyzeSkillsAndSuggestCourses();
    }

    analyzeSkillsAndSuggestCourses() {
        // Yeteneklere göre otomatik ders önerisi
        const suggestions = [];
        if (this.skills.includes('Veri Analitiği') || this.skills.includes('Python')) {
            suggestions.push('Yapay Zeka 101', 'Veri Bilimi 101');
        }
        if (this.skills.includes('Dijital Pazarlama')) {
            suggestions.push('Sosyal Medya Yönetimi', 'İçerik Pazarlaması');
        }
        if (this.skills.includes('Siber Güvenlik')) {
            suggestions.push('Siber Güvenlik Temelleri', 'Etik Hacking');
        }
        return suggestions;
    }

    applyForInternship(company, position) {
        const application = {
            company: company.name,
            position: position,
            date: new Date().toLocaleDateString('tr-TR'),
            status: 'Beklemede'
        };
        this.internshipApplications.push(application);
        console.log(`${this.name}, ${company.name} firmasına ${position} pozisyonu için başvurdu.`);
        return application;
    }

    enrollInCourse(course) {
        if (course.capacity > course.enrolled) {
            this.enrolledCourses.push(course.name);
            course.addStudent(this);
            console.log(`${this.name}, ${course.name} dersine kaydoldu.`);
            return true;
        }
        console.log(`${course.name} dersi dolu!`);
        return false;
    }
}

// Company Class - Şirket nesnesi
class Company {
    constructor(name, industry) {
        this.name = name;
        this.industry = industry;
        this.internshipPostings = [];
        this.courseRequests = [];
        this.receivedApplications = [];
    }

    submitInternshipPosting(position, requirements, duration, quota) {
        const posting = {
            position: position,
            requirements: requirements,
            duration: duration,
            quota: quota,
            date: new Date().toLocaleDateString('tr-TR'),
            applications: []
        };
        this.internshipPostings.push(posting);
        console.log(`${this.name}, ${position} pozisyonu için staj ilanı oluşturdu.`);
        return posting;
    }

    reviewStudentCV(student) {
        console.log(`${this.name}, ${student.name}'in CV'sini inceliyor...`);
        return student.cv;
    }

    requestNewCourse(courseName, courseContent, reason) {
        const request = {
            courseName: courseName,
            content: courseContent,
            reason: reason,
            companyName: this.name,
            date: new Date().toLocaleDateString('tr-TR'),
            status: 'Beklemede'
        };
        this.courseRequests.push(request);
        console.log(`${this.name}, "${courseName}" dersi açılması için talep oluşturdu.`);
        return request;
    }

    acceptCandidate(student, position) {
        console.log(`${this.name}, ${student.name}'i ${position} pozisyonuna kabul etti.`);
        // Öğrencinin başvuru durumunu güncelle
        const application = student.internshipApplications.find(
            app => app.company === this.name && app.position === position
        );
        if (application) {
            application.status = 'Kabul Edildi';
        }
    }

    rejectCandidate(student, position) {
        console.log(`${this.name}, ${student.name}'in ${position} başvurusunu reddetti.`);
        const application = student.internshipApplications.find(
            app => app.company === this.name && app.position === position
        );
        if (application) {
            application.status = 'Reddedildi';
        }
    }
}

// UniversityAdministration Class - Üniversite yönetimi
class UniversityAdministration {
    constructor() {
        this.courses = [];
        this.pendingCourseRequests = [];
        this.activeMatches = [];
    }

    createNewCourse(name, instructor, capacity, content) {
        const course = new Course(name, instructor, capacity, content);
        this.courses.push(course);
        console.log(`Yeni ders açıldı: ${name} - ${instructor}`);
        return course;
    }

    evaluateEmployerRequests(request) {
        console.log(`${request.companyName}'nin "${request.courseName}" ders talebi değerlendiriliyor...`);
        this.pendingCourseRequests.push(request);
    }

    approveCourseRequest(request) {
        request.status = 'Onaylandı';
        const newCourse = this.createNewCourse(request.courseName, 'TBD', 30, request.content);
        console.log(`Ders talebi onaylandı: ${request.courseName}`);
        return newCourse;
    }

    rejectCourseRequest(request) {
        request.status = 'Reddedildi';
        console.log(`Ders talebi reddedildi: ${request.courseName}`);
    }

    findMatchingCVs(company, position, requiredSkills) {
        // Mock data kullanarak eşleşen öğrencileri bul
        console.log(`${company.name} için ${position} pozisyonuna uygun adaylar aranıyor...`);
        // Gerçek implementasyonda öğrenci veritabanından filtreleme yapılır
        const matches = [];
        return matches;
    }

    matchStudentWithCompany(student, company, position) {
        const match = {
            student: student.name,
            company: company.name,
            position: position,
            date: new Date().toLocaleDateString('tr-TR'),
            status: 'Aktif'
        };
        this.activeMatches.push(match);
        console.log(`Eşleşme yapıldı: ${student.name} - ${company.name} (${position})`);
        
        // Bildirimleri gönder
        this.sendNotification(student, `${company.name} firması ile ${position} pozisyonu için eşleştirildiniz!`);
        this.sendNotification(company, `${student.name} adlı öğrenci ${position} pozisyonunuz için eşleştirildi.`);
        
        return match;
    }

    sendNotification(recipient, message) {
        console.log(`Bildirim gönderildi: ${message}`);
        // Gerçek implementasyonda notification sistemi kullanılır
    }
}

// Course Class - Ders nesnesi
class Course {
    constructor(name, instructor, capacity, content = '') {
        this.name = name;
        this.instructor = instructor;
        this.capacity = capacity;
        this.content = content;
        this.enrolled = 0;
        this.students = [];
        this.certificates = [];
    }

    addStudent(student) {
        if (this.enrolled < this.capacity) {
            this.students.push(student);
            this.enrolled++;
            console.log(`${student.name}, ${this.name} dersine eklendi.`);
            return true;
        }
        return false;
    }

    removeStudent(student) {
        const index = this.students.findIndex(s => s.studentId === student.studentId);
        if (index !== -1) {
            this.students.splice(index, 1);
            this.enrolled--;
            console.log(`${student.name}, ${this.name} dersinden ayrıldı.`);
            return true;
        }
        return false;
    }

    giveCertificate(student) {
        const certificate = {
            studentName: student.name,
            courseName: this.name,
            instructor: this.instructor,
            date: new Date().toLocaleDateString('tr-TR'),
            certificateId: `CERT-${Date.now()}`
        };
        this.certificates.push(certificate);
        student.certifications.push(`${this.name} - ${this.instructor}`);
        console.log(`${student.name} için ${this.name} sertifikası verildi.`);
        return certificate;
    }

    getCourseInfo() {
        return {
            name: this.name,
            instructor: this.instructor,
            capacity: this.capacity,
            enrolled: this.enrolled,
            available: this.capacity - this.enrolled
        };
    }
}

// ============================================
// MOCK DATA - Senaryolara göre örnek veriler
// ============================================

// Öğrenciler
const students = {
    sude: new Student('Sude Yılmaz', '202001001', 'Bilgisayar Mühendisliği', 
        ['Dijital Pazarlama', 'Veri Analitiği', 'Yapay Zeka'], 
        ['AI Fundamentals', 'Google Data Analytics']),
    
    deniz: new Student('Deniz Kara', '202001002', 'Yazılım Mühendisliği',
        ['Python', 'Veri Analitiği', 'Machine Learning'],
        ['Python for Data Science']),
    
    esin: new Student('Esin Aydın', '202001003', 'İşletme',
        ['Dijital Pazarlama', 'Sosyal Medya Yönetimi', 'İçerik Üretimi'],
        ['Digital Marketing Certificate']),
    
    derya: new Student('Derya Şahin', '202001004', 'Bilgisayar Mühendisliği',
        ['Siber Güvenlik', 'Network', 'Ethical Hacking'],
        ['CompTIA Security+'])
};

// Şirketler
const companies = {
    burak: new Company('DataNova', 'Yapay Zeka ve Veri Analitiği'),
    cem: new Company('DigiMarketing Pro', 'Dijital Pazarlama'),
    eylul: new Company('SecureNet', 'Siber Güvenlik'),
    veritech: new Company('VeriTech', 'Veri Bilimi')
};

// Üniversite Yönetimi
const university = new UniversityAdministration();

// ============================================
// SENARYO SİMÜLASYONLARI
// ============================================

// Scenario 1: Sude updates CV → receives AI course → gets internship
function simulateScenario1() {
    console.log('\n=== SENARYO 1: Sude\'nin Hikayesi ===');
    
    // Sude CV'sini günceller
    students.sude.updateCV({
        name: 'Sude Yılmaz',
        skills: students.sude.skills,
        certifications: students.sude.certifications
    });
    
    // Sistem otomatik ders önerir
    const suggestions = students.sude.analyzeSkillsAndSuggestCourses();
    console.log('Önerilen dersler:', suggestions);
    
    // Burak'ın şirketi staj ilanı açar
    companies.burak.submitInternshipPosting(
        'Veri Analitiği Stajyeri',
        ['Python', 'Veri Analitiği', 'SQL'],
        '6 Ay',
        2
    );
    
    // Sude başvurur
    students.sude.applyForInternship(companies.burak, 'Veri Analitiği Stajyeri');
    
    // Burak CV'yi inceler ve kabul eder
    companies.burak.reviewStudentCV(students.sude);
    companies.burak.acceptCandidate(students.sude, 'Veri Analitiği Stajyeri');
}

// Scenario 2: Deniz automatic course suggestion → hired by VeriTech
function simulateScenario2() {
    console.log('\n=== SENARYO 2: Deniz\'in Hikayesi ===');
    
    // Deniz CV günceller
    students.deniz.updateCV({
        name: 'Deniz Kara',
        skills: students.deniz.skills,
        certifications: students.deniz.certifications
    });
    
    // Otomatik öneri
    const suggestions = students.deniz.analyzeSkillsAndSuggestCourses();
    console.log('Deniz için önerilen dersler:', suggestions);
    
    // VeriTech eşleşme bulur
    university.matchStudentWithCompany(students.deniz, companies.veritech, 'Veri Bilimci Stajyeri');
}

// Scenario 3: Esin verified CV → Cem hires for digital marketing
function simulateScenario3() {
    console.log('\n=== SENARYO 3: Esin\'in Hikayesi ===');
    
    students.esin.updateCV({
        name: 'Esin Aydın',
        skills: students.esin.skills,
        certifications: students.esin.certifications
    });
    
    companies.cem.submitInternshipPosting(
        'Dijital Pazarlama Stajyeri',
        ['Sosyal Medya', 'İçerik Üretimi', 'SEO'],
        '3 Ay',
        1
    );
    
    students.esin.applyForInternship(companies.cem, 'Dijital Pazarlama Stajyeri');
    companies.cem.acceptCandidate(students.esin, 'Dijital Pazarlama Stajyeri');
}

// Scenario 4: Derya requests cybersecurity → Eylül completes → gets hired
function simulateScenario4() {
    console.log('\n=== SENARYO 4: Derya\'nın Hikayesi ===');
    
    // Eylül'ün şirketi ders talebi oluşturur
    const courseRequest = companies.eylul.requestNewCourse(
        'Siber Güvenlik Temelleri',
        'Ağ güvenliği, penetrasyon testleri, güvenlik protokolleri',
        'Şirketimizde siber güvenlik konusunda stajyer ihtiyacımız var'
    );
    
    // Üniversite değerlendirir ve onaylar
    university.evaluateEmployerRequests(courseRequest);
    const newCourse = university.approveCourseRequest(courseRequest);
    
    // Derya kursa kaydolur
    students.derya.enrollInCourse(newCourse);
    
    // Kurs tamamlandıktan sonra sertifika verilir
    newCourse.giveCertificate(students.derya);
    
    // Eylül Derya'yı işe alır
    companies.eylul.submitInternshipPosting(
        'Siber Güvenlik Uzman Stajyeri',
        ['Siber Güvenlik', 'Penetrasyon Testi'],
        '6 Ay',
        1
    );
    
    students.derya.applyForInternship(companies.eylul, 'Siber Güvenlik Uzman Stajyeri');
    companies.eylul.acceptCandidate(students.derya, 'Siber Güvenlik Uzman Stajyeri');
}

// ============================================
// DOM HAZIR OLDUĞUNDA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Sayfa yüklenme animasyonu
    document.body.classList.add('fade-in');
    
    // Form validasyonlarını başlat
    initFormValidation();
    
    // Modal fonksiyonlarını başlat
    initModals();
    
    // Dinamik içerik yükleme
    initDynamicContent();
});

// ============================================
// FORM VALIDASYON
// ============================================
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                handleFormSubmit(form);
            }
            form.classList.add('was-validated');
        }, false);
    });
}

// ============================================
// FORM GÖNDERİM İŞLEMLERİ
// ============================================
function handleFormSubmit(form) {
    const formId = form.id;
    
    switch(formId) {
        case 'cvForm':
            saveCVData(form);
            break;
        case 'internshipApplicationForm':
            submitInternshipApplication(form);
            break;
        case 'companyRequestForm':
            submitCompanyRequest(form);
            break;
        case 'courseForm':
            submitCourse(form);
            break;
        case 'matchingForm':
            performMatching(form);
            break;
        default:
            showToast('Form başarıyla gönderildi!', 'success');
    }
}

// ============================================
// CV YÖNETİMİ
// ============================================
function saveCVData(form) {
    const formData = new FormData(form);
    const cvData = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        department: formData.get('department'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        skills: formData.get('skills'),
        certificates: formData.get('certificates')
    };
    
    // LocalStorage'a kaydet
    localStorage.setItem('studentCV', JSON.stringify(cvData));
    
    // CV önizlemesini güncelle
    updateCVPreview(cvData);
    
    showToast('CV bilgileriniz başarıyla kaydedildi!', 'success');
}

function updateCVPreview(cvData) {
    const cvPreview = document.getElementById('cvPreview');
    if (cvPreview) {
        cvPreview.innerHTML = `
            <div class="cv-card">
                <div class="cv-section">
                    <h5><i class="fas fa-user me-2"></i>Kişisel Bilgiler</h5>
                    <p><strong>Ad Soyad:</strong> ${cvData.name} ${cvData.surname}</p>
                    <p><strong>Bölüm:</strong> ${cvData.department}</p>
                    <p><strong>E-posta:</strong> ${cvData.email}</p>
                    <p><strong>Telefon:</strong> ${cvData.phone}</p>
                </div>
                <div class="cv-section">
                    <h5><i class="fas fa-code me-2"></i>Yetenekler</h5>
                    <p>${cvData.skills}</p>
                </div>
                <div class="cv-section">
                    <h5><i class="fas fa-certificate me-2"></i>Sertifikalar</h5>
                    <p>${cvData.certificates}</p>
                </div>
            </div>
        `;
    }
}

// Sayfa yüklendiğinde kayıtlı CV'yi yükle
function loadSavedCV() {
    const savedCV = localStorage.getItem('studentCV');
    if (savedCV) {
        const cvData = JSON.parse(savedCV);
        
        // Form alanlarını doldur
        if (document.getElementById('cvForm')) {
            document.getElementById('name').value = cvData.name || '';
            document.getElementById('surname').value = cvData.surname || '';
            document.getElementById('department').value = cvData.department || '';
            document.getElementById('email').value = cvData.email || '';
            document.getElementById('phone').value = cvData.phone || '';
            document.getElementById('skills').value = cvData.skills || '';
            document.getElementById('certificates').value = cvData.certificates || '';
            
            // Önizlemeyi güncelle
            updateCVPreview(cvData);
        }
    }
}

// ============================================
// STAJ BAŞVURUSU
// ============================================
function submitInternshipApplication(form) {
    const formData = new FormData(form);
    const applicationData = {
        company: formData.get('company'),
        position: formData.get('position'),
        duration: formData.get('duration'),
        description: formData.get('description'),
        date: new Date().toLocaleDateString('tr-TR')
    };
    
    // LocalStorage'a kaydet
    let applications = JSON.parse(localStorage.getItem('internshipApplications') || '[]');
    applications.push(applicationData);
    localStorage.setItem('internshipApplications', JSON.stringify(applications));
    
    showToast(`${applicationData.company} firmasına başvurunuz başarıyla gönderildi!`, 'success');
    form.reset();
    form.classList.remove('was-validated');
}

// ============================================
// ŞİRKET STAJ TALEBİ
// ============================================
function submitCompanyRequest(form) {
    const formData = new FormData(form);
    const requestData = {
        position: formData.get('position'),
        description: formData.get('description'),
        skills: formData.get('skills'),
        duration: formData.get('duration'),
        quota: formData.get('quota'),
        date: new Date().toLocaleDateString('tr-TR')
    };
    
    // LocalStorage'a kaydet
    let requests = JSON.parse(localStorage.getItem('companyRequests') || '[]');
    requests.push(requestData);
    localStorage.setItem('companyRequests', JSON.stringify(requests));
    
    showToast('Staj talebi başarıyla oluşturuldu!', 'success');
    form.reset();
    form.classList.remove('was-validated');
}

// ============================================
// DERS YÖNETİMİ
// ============================================
function submitCourse(form) {
    const formData = new FormData(form);
    const courseData = {
        courseName: formData.get('courseName'),
        instructor: formData.get('instructor'),
        capacity: formData.get('capacity'),
        date: new Date().toLocaleDateString('tr-TR')
    };
    
    showToast(`${courseData.courseName} dersi başarıyla eklendi!`, 'success');
    form.reset();
    form.classList.remove('was-validated');
}

// ============================================
// EŞLEŞTİRME İŞLEMİ
// ============================================
function performMatching(form) {
    const formData = new FormData(form);
    const student = formData.get('student');
    const company = formData.get('company');
    
    if (student && company) {
        showToast(`${student} öğrencisi ${company} firmasıyla başarıyla eşleştirildi!`, 'success');
        form.reset();
        form.classList.remove('was-validated');
    }
}

// ============================================
// DERS BAŞVURU / AYRILMA
// ============================================
function applyCourse(courseName) {
    showToast(`${courseName} dersine başvurunuz alındı!`, 'success');
}

function leaveCourse(courseName) {
    if (confirm(`${courseName} dersinden ayrılmak istediğinizden emin misiniz?`)) {
        showToast(`${courseName} dersinden ayrıldınız.`, 'warning');
    }
}

// ============================================
// CV GÖRÜNTÜLEME (MODAL)
// ============================================
function viewCV(studentName, department, skills, certificates) {
    const modalBody = document.getElementById('cvModalBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="cv-card">
                <div class="cv-section">
                    <h5><i class="fas fa-user me-2"></i>Öğrenci Bilgileri</h5>
                    <p><strong>Ad Soyad:</strong> ${studentName}</p>
                    <p><strong>Bölüm:</strong> ${department}</p>
                </div>
                <div class="cv-section">
                    <h5><i class="fas fa-code me-2"></i>Yetenekler</h5>
                    <p>${skills}</p>
                </div>
                <div class="cv-section">
                    <h5><i class="fas fa-certificate me-2"></i>Sertifikalar</h5>
                    <p>${certificates}</p>
                </div>
            </div>
        `;
        
        const cvModal = new bootstrap.Modal(document.getElementById('cvModal'));
        cvModal.show();
    }
}

// ============================================
// KABUL / RED İŞLEMLERİ
// ============================================
function acceptCandidate(studentName) {
    showToast(`${studentName} adlı aday kabul edildi!`, 'success');
}

function rejectCandidate(studentName) {
    if (confirm(`${studentName} adlı adayı reddetmek istediğinizden emin misiniz?`)) {
        showToast(`${studentName} adlı aday reddedildi.`, 'warning');
    }
}

// ============================================
// ÜNİVERSİTE TALEP İŞLEMLERİ
// ============================================
function approveRequest(companyName, position) {
    showToast(`${companyName} - ${position} talebi onaylandı!`, 'success');
}

function rejectRequest(companyName, position) {
    if (confirm(`${companyName} - ${position} talebini reddetmek istediğinizden emin misiniz?`)) {
        showToast(`${companyName} - ${position} talebi reddedildi.`, 'warning');
    }
}

// ============================================
// TOAST BİLDİRİMLERİ
// ============================================
function showToast(message, type = 'info') {
    // Mevcut toast'ı kaldır
    const existingToast = document.querySelector('.toast-custom');
    if (existingToast) {
        existingToast.remove();
    }
    
    // İkon ve renk belirleme
    let icon = 'fa-info-circle';
    let bgColor = '#00509E';
    
    if (type === 'success') {
        icon = 'fa-check-circle';
        bgColor = '#27AE60';
    } else if (type === 'warning') {
        icon = 'fa-exclamation-triangle';
        bgColor = '#F5C518';
    } else if (type === 'error') {
        icon = 'fa-times-circle';
        bgColor = '#E74C3C';
    }
    
    // Toast oluştur
    const toast = document.createElement('div');
    toast.className = 'toast-custom';
    toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <i class="fas ${icon}" style="font-size: 1.5rem; color: ${bgColor};"></i>
            <div style="flex: 1;">
                <p style="margin: 0; font-weight: 600; color: #2C3E50;">${message}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="border: none; background: none; cursor: pointer; color: #7F8C8D;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // 4 saniye sonra otomatik kaldır
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// ============================================
// MODAL İNİTİALİZASYON
// ============================================
function initModals() {
    // Bootstrap modal'larını başlat
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('hidden.bs.modal', function () {
            // Modal kapandığında formu temizle
            const form = this.querySelector('form');
            if (form) {
                form.reset();
                form.classList.remove('was-validated');
            }
        });
    });
}

// ============================================
// DİNAMİK İÇERİK YÜKLEME
// ============================================
function initDynamicContent() {
    // Sayfa tipine göre içerik yükle
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'student.html') {
        loadSavedCV();
    }
}

// ============================================
// SCROLL ANIMASYONU
// ============================================
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// ============================================
// NAVİGASYON AKTİF SAYFA İŞARETLEME
// ============================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Sayfa yüklendiğinde aktif linki işaretle
window.addEventListener('load', setActiveNavLink);

// ============================================
// YARDIMCI FONKSİYONLAR
// ============================================

// E-posta validasyonu
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Telefon validasyonu
function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Tarih formatlama
function formatDate(date) {
    return new Date(date).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ============================================
// SENARYO TEST FONKSİYONLARI
// ============================================
function testAllScenarios() {
    simulateScenario1();
    setTimeout(() => simulateScenario2(), 1000);
    setTimeout(() => simulateScenario3(), 2000);
    setTimeout(() => simulateScenario4(), 3000);
    showToast('Tüm senaryolar konsola yazdırıldı! (F12 ile kontrol edin)', 'success');
}

// ============================================
// GLOBAL FONKSİYONLAR (HTML'den erişilebilir)
// ============================================
window.applyCourse = applyCourse;
window.leaveCourse = leaveCourse;
window.viewCV = viewCV;
window.acceptCandidate = acceptCandidate;
window.rejectCandidate = rejectCandidate;
window.approveRequest = approveRequest;
window.rejectRequest = rejectRequest;
window.showToast = showToast;
window.testAllScenarios = testAllScenarios;
window.simulateScenario1 = simulateScenario1;
window.simulateScenario2 = simulateScenario2;
window.simulateScenario3 = simulateScenario3;
window.simulateScenario4 = simulateScenario4;

// Mock data'yı global scope'a ekle
window.students = students;
window.companies = companies;
window.university = university;

