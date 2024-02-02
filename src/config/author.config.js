export default{
    name: 'Yongyi Su',
    avatar_pic: './imgs/YongyiSu2.webp',
    role: 'PhD Student',
    school: {name: 'South China University of Technology', url: 'https://www.scut.edu.cn/'},
    college: {name: '', url: ''},
    email: 'eesuyongyi@mail.scut.edu.cn',
    options: {
        'Google Scholar': 'https://scholar.google.com/citations?user=0MDbs-8AAAAJ',
        'GitHub': 'https://github.com/Dyb3438',
        'OpenReview': 'https://openreview.net/profile?id=~Yongyi_Su1',
    },

    aboutMe: `
    I am pursuing a Master-Doctor combined program and am currently a <b>PhD student</b> in <a href="https://github.com/Gorilla-Lab-SCUT">Geometric Perception and Intelligence Research Lab</a> (Gorilla Lab) in <a href="https://www2.scut.edu.cn/ee/">the School of Electronic and Information Engineering</a> at <a href="https://www.scut.edu.cn/">South China University of Technology</a> (SCUT) from <b>Sept. 2022</b>. My PhD supervisors are Prof. <a href="http://kuijia.site/">Kui Jia</a> and Dr. <a href="https://alex-xun-xu.github.io/">Xun Xu</a> (joint supervisor). </br></br>
    Prior to that, I received my <b>B.Eng.</b> from the School of Electronic and Information Engineering, SCUT in <b>Jun. 2021</b>. In <b>Sept. 2021</b>, I undertook an one-year <b>MSc study</b> in Gorilla Lab at SCUT under the supervision of Associate Prof. <a href="https://scholar.google.com/citations?user=pbNCoTwAAAAJ">Ke Chen</a>. </br></br>
    My recent research interests focus on <span style="color:#f75522"><b>test-time adaptation</b></span>, <span style="color:#55f722"><b>domain adaptation</b></span> and <span style="color:#5522f7"><b>incomplete supervised learning</b></span>. I really enjoy my research and if you are interested or troubled by it, you are welcome to discuss it with me.
    `,

    news: [
        `Dec 2023: Our work on <b>Towards Real-World Test-Time Adaptation: Tri-Net Self-Training with Balanced Normalization</b> was accepted by AAAI 2024.`,
        `Nov 2023: I'm studying at <a href='https://www.a-star.edu.sg/i2r'>I<sup>2</sup>R, A*STAR</a> as a visit student, funded by <a href='https://www.csc.edu.cn/'>CSC</a>, due to Nov 2025.`,
        `Jul 2023: Our work on <b>On the Robustness of Open-World Test-Time Training: Self-Training with Dynamic Prototype Expansion</b> was accepted by <b>ICCV 2023 as Oral presentation</b>. Congratulations to Yushu Li!`,
        `May 2023: Our work on <b>Weakly Supervised 3D Point Cloud Segmentation via Multi-Prototype Learning</b> was accepted by IEEE Transactions on Circuits and Systems for Video Technology (TCSVT).`,
        `Sep 2022: Our work on <b>Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering</b> was accepted by NeurIPS 2022.`,
    ],

    academicFootprints: {
        'Education Background':[
            [
                '<b>Master-Doctor program in South China Univeristy of Technology</b>',
                '2021.09-Now',
                'Supervisor: Prof. Kui Jia and Dr. Xun Xu'
            ],
            [
                '<b>B.Eng in South China Univeristy of Technology</b>',
                '2017.09-2021.06'
            ]
        ],
        'Academic Services':[
            [
                '<b>Journal Reviewer</b>',
                'TIP, TCSVT',
            ],
            [
                '<b>Conference Reviewer</b>',
                'ICML, ICLR, NeurIPS, ACM MM, CVPR, ECCV, ACCV, etc.'
            ]
        ],
    },

    publications: {
        2024: [
            {
                image: './imgs/2024_LiuEtAl_SFOD.webp',
                title: 'CLIP-guided Source-free Object Detection in Aerial Images',
                author: 'Nanqing Liu, Xun Xu, <b>Yongyi Su</b>, Chengxin Liu, Peiliang Gong and Heng-Chao Li',
                publisher: 'Preprint, 2024',
                keywords: ['CLIP', 'Object Detection', 'Source-Free Domain Adaptation', 'Aerial Images'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2401.05168',
                    'Bibtex': './bibtexs/2024_LiuEtAl_SFOD.bib',
                    // 'Project Page': 'https://github.com/Gorilla-Lab-SCUT/TRIBE',
                    // 'Code': 'https://github.com/Gorilla-Lab-SCUT/TRIBE'
                },
                new: true
            },
            {
                image: './imgs/2023_SuEtAl_TRIBE.webp',
                title: 'Towards Real-World Test-Time Adaptation: Tri-Net Self-Training with Balanced Normalization',
                author: '<b>Yongyi Su</b>, Xun Xu and Kui Jia',
                publisher: 'Proceedings of the AAAI conference on artificial intelligence (<b>AAAI</b>), 2024',
                keywords: ['Test-Time Adaptation', 'Real-World Test-Time Adaptation', 'Balanced BN', 'Self Training'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2309.14949',
                    'Bibtex': './bibtexs/2023_SuEtAl_TRIBE.bib',
                    'Project Page': 'https://github.com/Gorilla-Lab-SCUT/TRIBE',
                    'Code': 'https://github.com/Gorilla-Lab-SCUT/TRIBE'
                },
                new: true
            },
        ],
        2023: [
            {
                image: './imgs/2023_ZhangEtAl_WeSAM.webp',
                title: 'Improving the Generalization of Segmentation Foundation Model under Distribution Shift via Weakly Supervised Adaptation',
                author: 'Haojie Zhang, <b>Yongyi Su</b>, Xun Xu and Kui Jia',
                publisher: 'Preprint, 2023',
                keywords: ['Segment Anything', 'Foundation Model', 'Weakly Supervised Learning', 'Domain Adaptation'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2312.03502',
                    'Bibtex': './bibtexs/2023_ZhangEtAl_WeSAM.bib',
                    'Project Page': 'https://github.com/Zhang-Haojie/WeSAM',
                    'Code': 'https://github.com/Zhang-Haojie/WeSAM'
                },
                new: true
            },
            {
                image: './imgs/2023_LiEtAl_OWTTT.webp',
                title: 'On the Robustness of Open-World Test-Time Training: Self-Training with Dynamic Prototype Expansion',
                author: 'Yushu Li, Xun Xu, <b>Yongyi Su</b> and Kui Jia',
                publisher: 'IEEE/CVF International Conference on Computer Vision (<b>ICCV</b>), 2023 (Oral presentation)',
                keywords: ['Test-Time Training', 'Open-World Test-Time Training', 'Domain Adaptation', 'Self Training'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2308.09942',
                    'Bibtex': './bibtexs/2023_LiEtAl_OWTTT.bib',
                    'Project Page': 'https://yushu-li.github.io/owttt-site',
                    'Code': 'https://github.com/Yushu-Li/OWTTT'
                }
            },
            {
                image: './imgs/2023_SuEtAl_MulPro.webp',
                title: 'Weakly Supervised 3D Point Cloud Segmentation via Multi-Prototype Learning',
                author: '<b>Yongyi Su</b>, Xun Xu and Kui Jia',
                publisher: 'IEEE Transactions on Circuits and Systems for Video Technology (<b>TCSVT</b>), 2023',
                keywords: ['Weakly Supervised Learning', 'Point Cloud', 'Semantic Segmentation'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2205.03137',
                    'Bibtex': './bibtexs/2023_SuEtAl_MulPro.bib',
                    // 'Project Page': '',
                    // 'Code': ''
                }
            },
            {
                image: './imgs/2023_ChenEtAl_STFAR.webp',
                title: 'STFAR: Improving Object Detection Robustness at Test-Time by Self-Training with Feature Alignment Regularization',
                author: 'Yijin Chen, Xun Xu, <b>Yongyi Su</b> and Kui Jia',
                publisher: 'Preprint, 2023',
                keywords: ['Test-Time Training', 'Object Detection', 'Self Training', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2303.17937',
                    'Bibtex': './bibtexs/2023_ChenEtAl_STFAR.bib',
                    // 'Project Page': '',
                    // 'Code': ''
                }
            },
            {
                image: './imgs/2023_SuEtAl_TTAC-.webp',
                title: 'Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering Regularized Self-Training',
                author: '<b>Yongyi Su</b>, Xun Xu, Tianrui Li and Kui Jia',
                publisher: 'Preprint, 2023',
                keywords: ['Test-Time Training', 'Self Training', 'Anchored Clustering', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2303.10856',
                    'Bibtex': './bibtexs/2023_SuEtAl_TTAC++.bib',
                    // 'Project Page': '',
                    // 'Code': ''
                }
            }
        ],

        2022: [
            {
                image: './imgs/2022_SuEtAl_TTAC.webp',
                title: 'Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering',
                author: '<b>Yongyi Su</b>, Xun Xu and Kui Jia',
                publisher: 'Advances in Neural Information Processing Systems (<b>NeurIPS</b>), 2022',
                keywords: ['Test-Time Training', 'Anchored Clustering', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2206.02721',
                    'Bibtex': './bibtexs/2022_SuEtAl_TTAC.bib',
                    'Project Page': './ProjectPage/2022_SuEtAl_TTAC',
                    'Code': 'https://github.com/Gorilla-Lab-SCUT/TTAC',
                }
            }
        ]
    },

    co_authors: {
        'Kui Jia': {
            image: './imgs/co-authors/JiaKui.jpeg',
            institute: 'The Chinese University of Hong Kong, Shenzhen',
            position: 'Professor',
            url: 'http://kuijia.site/',
            relationship: 'Teacher'
        },
        'Xun Xu': {
            image: './imgs/co-authors/XuXun.jpeg',
            institute: 'Institute for Infocomm Research, A*STAR',
            position: 'Senior Scientist',
            url: 'https://alex-xun-xu.github.io/',
            relationship: 'Teacher'
        },

        'Nanqing Liu': {
            image: './imgs/co-authors/NanqingLiu.png',
            institute: 'Southwest Jiaotong University, Chengdu',
            position: 'PhD Student',
            url: 'https://scholar.google.com/citations?user=x3dCJrAAAAAJ'
        },

        'Chengxin Liu': {
            image: './imgs/co-authors/ChengxinLiu.jpg',
            institute: 'Huazhong University of Science and Technology, Wuhan',
            position: 'PhD Student',
            url: 'https://cxliu0.github.io/'
        },

        'Peiliang Gong': {
            image: './imgs/co-authors/PeiliangGong.jpg',
            institute: 'Nanjing University of Aeronautics and Astronautics, Nanjing',
            position: 'PhD Student',
            url: 'https://scholar.google.com/citations?user=0AQhhVQAAAAJ'
        },

        'Yushu Li': {
            image: './imgs/co-authors/yushu.jpeg',
            institute: 'South China University of Technology, Guangzhou',
            position: 'Master Student',
            url: 'https://yushu-li.github.io/'
        },

        'Yijin Chen': {
            image: '',
            institute: 'South China University of Technology, Guangzhou',
            position: 'Master Student',
        },

        'Haojie Zhang': {
            image: './imgs/co-authors/HaojieZhang.jpeg',
            institute: 'South China University of Technology, Guangzhou',
            position: 'Master Student',
            url: 'https://scholar.google.com/citations?user=waixiQgAAAAJ'
        },
    },

    analysis_globe_id: 'ZDtaUoW728eYUFp5JX7le2e2P1sZJLUg9RrVZQf7j5g'
}