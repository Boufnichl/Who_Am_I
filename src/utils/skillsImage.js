import docker from '../assets/svg/skills/docker.svg'
import react from '../assets/svg/skills/react.svg'
import java from '../assets/svg/skills/java.svg'
import aws from '../assets/svg/skills/aws.svg'
import git from '../assets/svg/skills/git.svg'
import springboot from '../assets/svg/skills/spring boot.svg'
import devops from '../assets/svg/skills/devops.svg'
import microservices from '../assets/svg/skills/microservices.jpg'
import kafka from '../assets/svg/skills/kafka.svg'
import linux from '../assets/svg/skills/linux.svg'
import kubernetes from '../assets/svg/skills/kubernetes.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'spring boot':
            return springboot;
        case 'devops':
            return devops;     
        case 'microservices':
            return microservices;    
        case 'docker':
            return docker;
        case 'react':
            return react;
        case 'java':
            return java;
        case 'aws':
            return aws;
        case 'git':
            return git;
        case 'kafka':
            return kafka;
        case 'linux':
            return linux;
        case 'kubernetes':
            return kubernetes;
        default:
            break;
    }
}
