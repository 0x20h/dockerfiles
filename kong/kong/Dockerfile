FROM kong:0.11

RUN yum -y update && yum -y install nc && yum clean all
ADD startup.sh /startup.sh

ENTRYPOINT ["/startup.sh"]
